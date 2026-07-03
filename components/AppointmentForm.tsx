"use client";

import { FormEvent, ReactNode, useState } from "react";
import { AppointmentPayload } from "@/types";
import SmileDivider from "./SmileDivider";

const SERVICES = [
  "General checkup & cleaning",
  "Emergency / urgent care",
  "Cosmetic consultation",
  "Invisalign consultation",
  "Implants & restorations",
  "Pediatric visit",
];

const INITIAL_STATE: AppointmentPayload = {
  fullName: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  preferredDate: "",
  preferredTime: "",
  notes: "",
  isNewPatient: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function AppointmentForm() {
  const [form, setForm] = useState<AppointmentPayload>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  function update<K extends keyof AppointmentPayload>(key: K, value: AppointmentPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setFeedback(data.message);
      setForm(INITIAL_STATE);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="booking" className="bg-ivory py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-coral">Book a visit</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
              Find a time that actually works
            </h2>
            <SmileDivider className="mt-4" width={140} />
            <p className="mt-5 max-w-sm text-ink/60">
              Tell us a bit about what you need. We&apos;ll confirm your exact
              slot by email or phone within one business day.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm text-ink/70">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-pale text-deep">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
                Mon–Fri 8am–6pm · Sat 9am–2pm
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-pale text-deep">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C10.5 20 4 13.5 4 6a2 2 0 011-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                </span>
                Prefer to talk? Call (555) 010-2323
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-tooth border border-sand bg-white p-7 shadow-card sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="fullName">
                <input
                  id="fullName"
                  required
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="form-input"
                  placeholder="Jordan Lee"
                />
              </Field>
              <Field label="Phone number" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="form-input"
                  placeholder="(555) 010-2323"
                />
              </Field>
              <Field label="Email" htmlFor="email" className="sm:col-span-2">
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="form-input"
                  placeholder="you@email.com"
                />
              </Field>
              <Field label="Service" htmlFor="service" className="sm:col-span-2">
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="form-input"
                >
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date" htmlFor="preferredDate">
                <input
                  id="preferredDate"
                  type="date"
                  required
                  value={form.preferredDate}
                  onChange={(e) => update("preferredDate", e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Preferred time" htmlFor="preferredTime">
                <input
                  id="preferredTime"
                  type="time"
                  required
                  value={form.preferredTime}
                  onChange={(e) => update("preferredTime", e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Anything we should know? (optional)" htmlFor="notes" className="sm:col-span-2">
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="form-input resize-none"
                  placeholder="Dental anxiety, tooth pain, insurance provider, etc."
                />
              </Field>
            </div>

            <label className="mt-5 flex items-center gap-2.5 text-sm text-ink/70">
              <input
                type="checkbox"
                checked={form.isNewPatient}
                onChange={(e) => update("isNewPatient", e.target.checked)}
                className="h-4 w-4 rounded border-sand text-deep focus:ring-deep"
              />
              I&apos;m a new patient
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 w-full rounded-full bg-deep py-3.5 text-sm font-semibold text-ivory shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-deep-light disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending request…" : "Request appointment"}
            </button>

            {feedback && (
              <p
                className={`mt-4 text-sm ${status === "success" ? "text-deep" : "text-coral-dark"}`}
                role="status"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      {children}
    </div>
  );
}
