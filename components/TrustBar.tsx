const ITEMS = [
  "Most PPO plans accepted",
  "Sedation options available",
  "Same-week appointments",
  "Board-certified dentists",
  "Family & pediatric care",
];

export default function TrustBar() {
  return (
    <section className="border-y border-sand bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 lg:px-10">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-medium text-ink/60">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#8FD2BB" strokeWidth="2" />
              <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#0D3B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
