type Payload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

export async function sendContactEmail(p: Payload) {
  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;
  const recipient = process.env.CONTACT_FORM_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    throw new Error(
      "Missing SMTP2GO env vars (SMTP2GO_API_KEY, SMTP2GO_SENDER, CONTACT_FORM_RECIPIENT)"
    );
  }

  const subject = `Nová správa z webu${p.subject ? ` – ${p.subject}` : ""}`;

  const text = [
    `Meno: ${p.name}`,
    `Email: ${p.email}`,
    p.phone ? `Telefón: ${p.phone}` : null,
    p.subject ? `Predmet: ${p.subject}` : null,
    "",
    "Správa:",
    p.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>Nová správa z kontaktného formulára</h2>
    <p><strong>Meno:</strong> ${esc(p.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
    ${p.phone ? `<p><strong>Telefón:</strong> ${esc(p.phone)}</p>` : ""}
    ${p.subject ? `<p><strong>Predmet:</strong> ${esc(p.subject)}</p>` : ""}
    <hr/>
    <p style="white-space:pre-wrap">${esc(p.message)}</p>
  `;

  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Smtp2go-Api-Key": apiKey,
    },
    body: JSON.stringify({
      sender,
      to: [recipient],
      reply_to: p.email,
      subject,
      text_body: text,
      html_body: html,
    }),
  });

  const data = (await res.json().catch(() => ({}))) as {
    data?: { succeeded?: number; failed?: number; error?: string };
  };

  if (!res.ok || (data.data && data.data.succeeded === 0)) {
    throw new Error(
      data?.data?.error || `SMTP2GO request failed (status ${res.status})`
    );
  }
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
