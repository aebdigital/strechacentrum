import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendContactEmail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Vyplňte prosím povinné polia (meno, email, správa).",
        },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Neplatná emailová adresa." },
        { status: 400 }
      );
    }

    await sendContactEmail({ name, email, phone, subject, message });

    return NextResponse.json({
      success: true,
      message: "Ďakujeme! Vaša správa bola odoslaná. Ozveme sa do 24 hodín.",
    });
  } catch (err) {
    console.error("[contact] failed", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Nastala chyba pri odosielaní správy. Skúste to prosím neskôr alebo nás kontaktujte priamo.",
      },
      { status: 500 }
    );
  }
}
