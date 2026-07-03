"use client";

import { FormEvent, ReactNode, useState } from "react";
import { ContactPayload } from "@/types";
import SmileDivider from "./SmileDivider";

const INITIAL_STATE: ContactPayload = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<ContactPayload>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
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
    <section id="contact" className="bg-deep py-24 text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-mint">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
            Questions Hal can&apos;t answer?
          </h2>
          <SmileDivider className="mt-4" color="#BFE8D9" width={140} />
          <p className="mt-5 max-w-sm text-ivory/70">
            Send us a message and a real person from our front desk will
            follow up within one business day.
          </p>

          <div className="mt-9 flex flex-col gap-5 text-sm text-ivory/80">
            <div>
              <p className="text-xs uppercase tracking-wide text-ivory/50">Visit us</p>
              <p className="mt-1">128 Willowmere Lane, Suite 4, Riverton</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ivory/50">Call</p>
              <p className="mt-1">(555) 010-2323</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ivory/50">Email</p>
              <p className="mt-1">hello@halcyondental.example</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-tooth border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <ContactField label="Full name" htmlFor="c-fullName">
              <input
                id="c-fullName"
                required
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className="contact-input"
                placeholder="Jordan Lee"
              />
            </ContactField>
            <ContactField label="Email" htmlFor="c-email">
              <input
                id="c-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="contact-input"
                placeholder="you@email.com"
              />
            </ContactField>
            <ContactField label="Subject" htmlFor="c-subject" className="sm:col-span-2">
              <input
                id="c-subject"
                required
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                className="contact-input"
                placeholder="Question about my insurance"
              />
            </ContactField>
            <ContactField label="Message" htmlFor="c-message" className="sm:col-span-2">
              <textarea
                id="c-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="contact-input resize-none"
                placeholder="Tell us what's on your mind…"
              />
            </ContactField>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-7 w-full rounded-full bg-coral py-3.5 text-sm font-semibold text-ivory shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          {feedback && (
            <p className={`mt-4 text-sm ${status === "success" ? "text-mint" : "text-coral-light"}`} role="status">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactField({
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
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ivory/50">
        {label}
      </label>
      {children}
    </div>
  );
}
