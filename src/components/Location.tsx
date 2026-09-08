import { Reveal } from './Reveal';

export function Location() {
  const steps = [
    { num: '01', text: 'Submit a brief training history and your goals.' },
    { num: '02', text: 'Phone conversation with a head coach — no forms, no questionnaires.' },
    { num: '03', text: 'Trial session and facility tour. Offers extended within 48 hours.' },
  ];

  return (
    <section className="relative overflow-hidden bg-onyx py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mb-4 font-sans text-xs uppercase tracking-wider text-brass">
              Location & Access
            </p>
            <h2 className="font-display text-3xl font-semibold text-bone sm:text-4xl lg:text-5xl">
              DHA Phase 6. By the roundabout.
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-bone/60">
              Membership is capped at 220. We don't expand to meet demand — the room sets the limit, and the standard holds it there.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-8 border-b border-hairline pb-4">
                <span className="font-sans text-xs uppercase tracking-wider text-ash w-20 flex-shrink-0">
                  Hours
                </span>
                <span className="font-sans text-sm text-bone/80">
                  Mon–Sat · 5:30 AM – 11:00 PM
                </span>
              </div>
              <div className="flex gap-8 border-b border-hairline pb-4">
                <span className="font-sans text-xs uppercase tracking-wider text-ash w-20 flex-shrink-0">
                  Address
                </span>
                <span className="font-sans text-sm text-bone/80">
                  14-C, Bukhari Commercial, DHA Phase 6, Karachi
                </span>
              </div>
              <div className="flex gap-8">
                <span className="font-sans text-xs uppercase tracking-wider text-ash w-20 flex-shrink-0">
                  Contact
                </span>
                <span className="font-sans text-sm text-bone/80">
                  applications@atlas.pk · +92 21 3538 4400
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden border border-hairline">
              <img
                src="https://images.pexels.com/photos/34096455/pexels-photo-34096455.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Aerial night shot of Karachi"
                className="aspect-[4/3] w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-onyx via-onyx/40 to-transparent" />
              <div className="absolute bottom-0 right-0 p-6 lg:p-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-brass bg-brass/10 px-6 py-3.5 font-sans text-xs uppercase tracking-wider text-brass backdrop-blur-sm transition-colors duration-500 hover:bg-brass hover:text-onyx"
                >
                  Request an Invitation
                </a>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="font-sans text-xs uppercase tracking-wider text-ash">
                Application Process
              </p>
              {steps.map((step) => (
                <div key={step.num} className="flex gap-5">
                  <span className="font-display text-sm font-medium text-brass">
                    {step.num}
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-bone/70">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
