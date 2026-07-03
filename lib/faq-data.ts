import { FaqItem } from "@/types";

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "appointments",
    question: "How do I book my first appointment?",
    answer:
      "Use the booking form below, or ask Hal (our chat assistant) to set one up for you. New patients usually get a confirmation within one business day, and same-week slots are often available.",
  },
  {
    id: "faq-2",
    category: "general",
    question: "What should I bring to my first visit?",
    answer:
      "Bring a photo ID, your insurance card if you have one, and a list of any medications you're currently taking. If you have recent X-rays from another provider, feel free to bring those too.",
  },
  {
    id: "faq-3",
    category: "billing",
    question: "Do you accept my dental insurance?",
    answer:
      "We work with most major PPO insurance plans and offer an in-house membership plan for patients without coverage. Share your provider's name in the chat and we'll confirm the details.",
  },
  {
    id: "faq-4",
    category: "emergency",
    question: "I'm in pain right now — what do I do?",
    answer:
      "Call the clinic directly at (555) 010-2323 for same-day emergency slots. If it's outside business hours, our voicemail includes an after-hours line for urgent dental pain, swelling, or injuries.",
  },
  {
    id: "faq-5",
    category: "appointments",
    question: "Can I reschedule or cancel an appointment?",
    answer:
      "Yes — just let us know at least 24 hours in advance through the chat, by phone, or by email, and we'll find a new time that works for you at no extra charge.",
  },
  {
    id: "faq-6",
    category: "general",
    question: "Do you treat patients with dental anxiety?",
    answer:
      "This is genuinely one of our specialties. We offer a calmer environment, noise-cancelling headphones, sedation options, and a team trained to move at your pace — no judgment, ever.",
  },
  {
    id: "faq-7",
    category: "billing",
    question: "What if I don't have insurance?",
    answer:
      "Our Halcyon Membership covers two cleanings, exams, and a discount on treatment for a flat annual fee — no waiting periods, no claims paperwork.",
  },
  {
    id: "faq-8",
    category: "general",
    question: "What are your clinic hours?",
    answer:
      "We're open Monday through Friday, 8am–6pm, and Saturday, 9am–2pm for cleanings and urgent visits. Closed Sundays and major holidays.",
  },
];

export function getFaqByCategory(category?: FaqItem["category"]) {
  if (!category) return faqData;
  return faqData.filter((item) => item.category === category);
}
