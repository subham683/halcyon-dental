import SmileDivider from "./SmileDivider";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pb-20 pt-32 lg:pb-28 lg:pt-40">
      {/* Ambient background shapes */}
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-mint/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-coral-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-deep/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Now booking new patients
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]">
            Dentistry,
            <br />
            without the dread.
          </h1>

          <SmileDivider className="mt-4" width={160} />

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink/70">
            Halcyon Dental Studio pairs a calmer, judgment-free clinic with
            Hal — our AI assistant who answers questions and books your visit
            at 2am if that&apos;s when you happen to be thinking about it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="rounded-full bg-deep px-7 py-3.5 text-sm font-semibold text-ivory shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-deep-light"
            >
              Book your visit
            </a>
            <a
              href="#chat"
              className="rounded-full border border-deep/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-deep transition-colors hover:bg-white"
            >
              Ask Hal a question
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink/60">
            <div>
              <p className="font-display text-2xl text-deep">4.9/5</p>
              <p>from 1,200+ patients</p>
            </div>
            <div>
              <p className="font-display text-2xl text-deep">18 yrs</p>
              <p>caring for smiles locally</p>
            </div>
            <div>
              <p className="font-display text-2xl text-deep">24/7</p>
              <p>AI assistant availability</p>
            </div>
          </div>
        </div>

        {/* Floating chat preview mockup */}
        <div className="relative mx-auto w-full max-w-md animate-float-slow lg:mx-0">
          <div className="rounded-tooth border border-sand bg-white p-5 shadow-soft">
            <div className="flex items-center gap-3 border-b border-sand pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-mint-pale">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 5 Q12 17, 20 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Hal · Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-ink/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Online now
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-5">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-mint-pale px-4 py-2.5 text-sm text-ink/80">
                Hi! I have really bad anxiety about the dentist — is that okay here?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-deep px-4 py-2.5 text-sm text-ivory">
                Completely okay — it&apos;s actually one of our specialties.
                We can start with just a chat, no tools involved. Want me to
                flag this for your first visit?
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-sand px-4 py-2.5 text-sm text-ink/40">
              Type your question…
              <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-coral text-ivory">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-sand bg-white px-4 py-3 shadow-card">
            <p className="text-xs text-ink/50">Next available</p>
            <p className="font-display text-sm text-deep">Tomorrow, 10:30am</p>
          </div>
        </div>
      </div>
    </section>
  );
}
