"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  buildMailtoFallback,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormPayload,
} from "@/lib/contact-form";
import { CONTACT_EMAIL, SERVICE_INTEREST_OPTIONS } from "@/lib/company-info";

const INITIAL: ContactFormPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const inputClass =
  "zc-focus-ring w-full rounded-xl border border-white/10 bg-surface-base/60 px-4 py-3 font-poppins text-sm text-ink-primary placeholder:text-ink-muted transition-colors focus:border-accent-violet/40 focus:bg-surface-base";

const labelClass = "mb-1.5 block font-poppins text-xs font-semibold text-ink-secondary";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 font-poppins text-[11px] text-red-400">{message}</p>;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>(INITIAL);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof ContactFormPayload, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setFeedback(data.message ?? "Failed to send. Opening your email app as a backup.");
        window.location.href = buildMailtoFallback(form);
        return;
      }

      setStatus("success");
      setFeedback(data.message);
      setForm(INITIAL);
      setErrors({});
    } catch {
      setStatus("error");
      setFeedback("Network error. Opening your email app as a backup.");
      window.location.href = buildMailtoFallback(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Company <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Business name"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className={labelClass}>
          Service interested in <span className="text-red-400">*</span>
        </label>
        <select
          id="contact-service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={`${inputClass} ${!form.service ? "text-ink-muted" : ""}`}
        >
          <option value="">Select a service</option>
          {SERVICE_INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-surface-card text-ink-primary">
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.service} />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your business, goals, and what you'd like to automate..."
          className={`${inputClass} resize-none`}
        />
        <FieldError message={errors.message} />
      </div>

      <AnimatePresence mode="wait">
        {(status === "success" || status === "error") && feedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={`rounded-xl border px-4 py-3 font-poppins text-sm ${
              status === "success"
                ? "border-accent-lime/30 bg-accent-lime/10 text-accent-lime"
                : "border-red-500/30 bg-red-500/10 text-red-300"
            }`}
            role="alert"
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="zc-focus-ring group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent-violet px-8 font-poppins text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[220px]"
      >
        <span className="relative z-10 flex items-center gap-2">
          {status === "loading" ? (
            <>
              <i className="fas fa-circle-notch animate-spin text-xs" aria-hidden />
              Sending...
            </>
          ) : (
            <>
              Send message
              <i className="fas fa-paper-plane text-xs transition-transform group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      <p className="font-poppins text-[11px] text-ink-muted">
        Or email us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-violet hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
}
