import SmileDivider from "./SmileDivider";

const SERVICES = [
  {
    title: "General & preventive",
    description: "Cleanings, exams, and checkups to keep small issues from becoming big ones.",
    icon: (
      <path d="M12 3v18M5 8c0-3 3-5 7-5s7 2 7 5-2 4-2 7-2 5-5 5-5-2-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  {
    title: "Cosmetic dentistry",
    description: "Whitening, veneers, and bonding for a smile you're excited to share.",
    icon: (
      <path d="M4 9c2 4 6 6 8 6s6-2 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  {
    title: "Invisalign & orthodontics",
    description: "Straighten teeth on your schedule, with fewer office visits than braces.",
    icon: (
      <>
        <rect x="5" y="9" width="14" height="6" rx="3" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: "Emergency care",
    description: "Same-day appointments for pain, swelling, or injuries — no one should wait in pain.",
    icon: (
      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Implants & restorations",
    description: "Crowns, bridges, and implants that look and feel like natural teeth.",
    icon: (
      <path d="M12 4c-3 0-5 2-5 5 0 2 1 3 1 5 0 2 1 4 2 4s1-3 2-3 1 3 2 3 2-2 2-4c0-2 1-3 1-5 0-3-2-5-5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    ),
  },
  {
    title: "Pediatric dentistry",
    description: "A gentle first experience so kids grow up without fear of the dentist.",
    icon: (
      <path d="M9 10c0 3 1.5 6 3 6s3-3 3-6M6 10a2 2 0 100-4 2 2 0 000 4zM18 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">What we treat</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Care built around how you actually feel about visiting
          </h2>
          <SmileDivider className="mt-4" width={140} />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-sand bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-pale text-deep transition-colors group-hover:bg-deep group-hover:text-mint-pale">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
