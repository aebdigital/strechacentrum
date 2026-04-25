// Netlify Function: POST /.netlify/functions/contact
//
// Mirrors app/api/contact/route.ts so the form works in either runtime
// (Next.js server or static export with Netlify Functions).
//
// Required environment variables:
//   SMTP2GO_API_KEY        — SMTP2GO API key
//   SMTP2GO_SENDER         — verified "from" address
//   CONTACT_FORM_RECIPIENT — destination address

const JSON_HEADERS = { "Content-Type": "application/json" };

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: JSON_HEADERS,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: JSON_HEADERS,
      body: JSON.stringify({ success: false, message: "Neplatný formát." }),
    };
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        success: false,
        message: "Vyplňte prosím povinné polia (meno, email, správa).",
      }),
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        success: false,
        message: "Neplatná emailová adresa.",
      }),
    };
  }

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    console.error("[contact] missing SMTP2GO env vars");
    return {
      statusCode: 500,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        success: false,
        message:
          "Email služba nie je nakonfigurovaná. Kontaktujte nás prosím priamo.",
      }),
    };
  }

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const text = [
    `Meno: ${name}`,
    `Email: ${email}`,
    phone ? `Telefón: ${phone}` : null,
    subject ? `Predmet: ${subject}` : null,
    "",
    "Správa:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>Nová správa z kontaktného formulára</h2>
    <p><strong>Meno:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    ${phone ? `<p><strong>Telefón:</strong> ${esc(phone)}</p>` : ""}
    ${subject ? `<p><strong>Predmet:</strong> ${esc(subject)}</p>` : ""}
    <hr/>
    <p style="white-space:pre-wrap">${esc(message)}</p>
  `;

  try {
    const res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender,
        to: [recipient],
        reply_to: email,
        subject: `Nová správa z webu${subject ? ` – ${subject}` : ""}`,
        text_body: text,
        html_body: html,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || (data.data && data.data.succeeded === 0)) {
      console.error("[contact] SMTP2GO error", data);
      throw new Error(
        (data && data.data && data.data.error) ||
          `SMTP2GO request failed (status ${res.status})`
      );
    }

    return {
      statusCode: 200,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        success: true,
        message:
          "Ďakujeme! Vaša správa bola odoslaná. Ozveme sa do 24 hodín.",
      }),
    };
  } catch (err) {
    console.error("[contact] failed", err);
    return {
      statusCode: 500,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        success: false,
        message:
          "Nastala chyba pri odosielaní správy. Skúste to prosím neskôr.",
      }),
    };
  }
};
