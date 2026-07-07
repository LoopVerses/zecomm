import { CONTACT_EMAIL } from "@/lib/company-info";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormPayload): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "Enter a valid email address";
  if (!data.service.trim()) errors.service = "Please select a service";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters";

  return errors;
}

export function buildMailtoFallback(data: ContactFormPayload): string {
  const subject = encodeURIComponent(`Zeecom Automations — ${data.service}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.company ? `Company: ${data.company}` : null,
      `Service: ${data.service}`,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
