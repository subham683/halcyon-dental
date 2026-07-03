"use client";

import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/types";
import SmileDivider from "./SmileDivider";

const SUGGESTIONS = [
  "Do you accept my insurance?",
  "I have dental anxiety",
  "What are your hours?",
  "Book a cleaning",
];

function createMessage(role: ChatMessage["role"], content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
    createdAt: Date.now(),
  };
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I'm Hal 👋 — Halcyon Dental's virtual assistant. Ask me about appointments, pricing, hours, or how we handle dental anxiety.",
  createdAt: 0,
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setError(null);
    setMessages((prev) => [...prev, createMessage("user", trimmed)]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessages((prev) => [...prev, createMessage("assistant", data.data.reply)]);
    } catch (err) {
      setError("Hal is having trouble responding right now. Please try again.");
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <section id="chat" className="bg-mint-pale py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Ask anytime</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Meet Hal, your dental assistant
          </h2>
          <SmileDivider className="mx-auto mt-4" width={140} />
          <p className="mx-auto mt-4 max-w-lg text-ink/60">
            Answers to common questions, day or night. For medical concerns,
            Hal will always point you to our clinical team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-tooth border border-sand bg-white shadow-soft">
          {/* Chat header */}
          <div className="flex items-center gap-3 border-b border-sand bg-deep px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-pale text-deep">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 5 Q12 17, 20 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-ivory">Hal · Halcyon Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Responding instantly
              </p>
            </div>
          </div>

          {/* Message list */}
          <div
            ref={scrollRef}
            className="chat-scroll flex h-96 flex-col gap-3 overflow-y-auto px-6 py-6"
            role="log"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  message.role === "assistant"
                    ? "self-start rounded-tl-sm bg-mint-pale text-ink/80"
                    : "self-end rounded-tr-sm bg-deep text-ivory"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isTyping && (
              <div className="flex w-fit items-center gap-1.5 self-start rounded-2xl rounded-tl-sm bg-mint-pale px-4 py-3">
                <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-deep/50 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-deep/50 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-typing-dot rounded-full bg-deep/50 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          {error && (
            <p className="px-6 pb-2 text-xs text-coral-dark" role="alert">
              {error}
            </p>
          )}

          {/* Suggestions */}
          <div className="flex flex-wrap gap-2 border-t border-sand px-6 py-3">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-sand px-3 py-1.5 text-xs font-medium text-ink/60 transition-colors hover:border-deep hover:text-deep"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-3 border-t border-sand px-6 py-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              aria-label="Message Hal"
              className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/35"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral text-ivory transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink/40">
          Hal gives general information only and isn't a substitute for
          professional diagnosis. For emergencies, call (555) 010-2323.
        </p>
      </div>
    </section>
  );
}
