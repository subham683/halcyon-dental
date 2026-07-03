const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Ask Hal", href: "#chat" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a visit", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-dark py-12 text-ivory/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-pale text-deep">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 5 Q12 17, 20 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-display text-base text-ivory">Halcyon Dental Studio</span>
          </div>
          <p className="mt-3 max-w-xs text-sm">
            Calm, modern dentistry — with an AI assistant on call whenever
            you have a question.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ivory">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-ivory/40 lg:px-10">
        © {new Date().getFullYear()} Halcyon Dental Studio. All rights reserved. Placeholder site for demonstration purposes.
      </div>
    </footer>
  );
}
