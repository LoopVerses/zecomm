import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/company-info";
import { validateContactForm, type ContactFormPayload } from "@/lib/contact-form";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormPayload;
    const errors = validateContactForm(data);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone?.trim() || "",
      company: data.company?.trim() || "",
      service: data.service.trim(),
      message: data.message.trim(),
      _subject: `Zeecom Automations — ${data.service}`,
      _template: "table",
      _captcha: "false",
    };

    const formEndpoint =
      process.env.CONTACT_FORM_ENDPOINT ?? `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Unable to send message right now. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Thank you! We will get back to you within 24 hours." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
