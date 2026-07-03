"use client";

import { useState } from "react";
import { faqData } from "@/lib/faq-data";
import { FaqItem } from "@/types";
import SmileDivider from "./SmileDivider";

const CATEGORIES: { label: string; value: FaqItem["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Appointments", value: "appointments" },
  { label: "Billing", value: "billing" },
  { label: "Emergency", value: "emergency" },
  { label: "General", value: "general" },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]["value"]>("all");
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);

  const visibleFaqs =
    activeCategory === "all" ? faqData : faqData.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Frequently asked</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Answers, before you even ask Hal
          </h2>
          <SmileDivider className="mx-auto mt-4" width={140} />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-deep text-ivory"
                  : "bg-mint-pale text-ink/60 hover:bg-mint"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {visibleFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-sand bg-ivory transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-pale text-deep transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink/65">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
