import { faqData } from "@/lib/faq-data";

/**
 * This module simulates an AI assistant ("Hal") with lightweight keyword
 * matching against the clinic FAQ. It is intentionally isolated behind
 * `generateAssistantReply` so the placeholder logic can later be swapped
 * for a real model call (e.g. the Anthropic API) without touching any
 * UI code — see app/api/chat/route.ts.
 */

interface Intent {
  keywords: string[];
  reply: string;
}

const INTENTS: Intent[] = [
  {
    keywords: ["book", "appointment", "schedule", "slot", "visit"],
    reply:
      "I can help with that. Scroll down to the booking form and pick a service, date, and time — or tell me directly, e.g. \"book a cleaning next Tuesday afternoon.\"",
  },
  {
    keywords: ["price", "cost", "insurance", "billing", "payment", "afford"],
    reply:
      "Most PPO insurance plans are accepted, and we also offer the Halcyon Membership for patients without coverage. Which service were you asking about — I can give you a general range.",
  },
  {
    keywords: ["pain", "hurt", "emergency", "swelling", "broken", "urgent"],
    reply:
      "That sounds urgent — please call us directly at (555) 010-2323 for a same-day slot. If it's after hours, the voicemail has an emergency line. Are you able to call now?",
  },
  {
    keywords: ["anxious", "anxiety", "scared", "nervous", "afraid"],
    reply:
      "Totally understandable, and you're not alone — a lot of our patients feel this way. We offer sedation options, noise-cancelling headphones, and a team that moves entirely at your pace. Want me to note this for your visit?",
  },
  {
    keywords: ["hour", "open", "close", "weekend", "saturday", "sunday"],
    reply:
      "We're open Monday–Friday 8am–6pm and Saturday 9am–2pm. Closed Sundays and major holidays.",
  },
  {
    keywords: ["whiten", "whitening", "cosmetic", "veneer", "invisalign", "align"],
    reply:
      "We offer professional whitening, veneers, and Invisalign consultations. I can pass your details to our cosmetic team, or you can select the service in the booking form below.",
  },
  {
    keywords: ["cancel", "reschedule", "change my appointment", "move my"],
    reply:
      "No problem — as long as it's 24 hours out, I can flag this for our front desk to rebook you. What's the appointment date you'd like to change?",
  },
  {
    keywords: ["hi", "hello", "hey", "morning", "evening"],
    reply:
      "Hello! I'm Hal, the virtual assistant for Halcyon Dental Studio. I can answer questions, help you book a visit, or connect you with our team. What's on your mind?",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    reply: "Anytime! Is there anything else I can help you with today?",
  },
];

const FALLBACK_REPLIES = [
  "I want to make sure I get that right — could you rephrase, or ask about booking, pricing, hours, or a specific treatment?",
  "I'm still a placeholder assistant for this demo, so my range is limited right now — but the FAQ section below covers most common questions.",
];

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function matchFaq(message: string) {
  const normalized = normalize(message);
  return faqData.find((item) =>
    normalized.includes(normalize(item.question).replace(/[?]/g, "").slice(0, 12))
  );
}

function matchIntent(message: string): Intent | undefined {
  const normalized = normalize(message);
  return INTENTS.find((intent) =>
    intent.keywords.some((keyword) => normalized.includes(keyword))
  );
}

/**
 * Generates a placeholder assistant reply. Swap the body of this function
 * for a real model call when ready — the function signature (string in,
 * string out) is designed to stay stable.
 */
export function generateAssistantReply(userMessage: string): string {
  const faqMatch = matchFaq(userMessage);
  if (faqMatch) return faqMatch.answer;

  const intentMatch = matchIntent(userMessage);
  if (intentMatch) return intentMatch.reply;

  const index = Math.floor(Math.random() * FALLBACK_REPLIES.length);
  return FALLBACK_REPLIES[index];
}
