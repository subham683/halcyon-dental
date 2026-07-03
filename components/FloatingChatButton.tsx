"use client";

export default function FloatingChatButton() {
  return (
    <a
      href="#chat"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-deep py-3 pl-4 pr-5 text-sm font-semibold text-ivory shadow-soft transition-transform hover:-translate-y-1"
      aria-label="Ask Hal a question"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-coral" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative" aria-hidden="true">
          <path d="M4 5 Q12 17, 20 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
      Ask Hal
    </a>
  );
}
