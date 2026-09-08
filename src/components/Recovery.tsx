import { Reveal } from './Reveal';

export function Recovery() {
  return (
    <section className="relative overflow-hidden bg-onyx py-24 lg:py-36">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37816612/pexels-photo-37816612.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sauna with dark wood walls and stone heater"
          className="h-full w-full object-cover duotone"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/85 to-onyx/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-transparent to-onyx/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        <div className="max-w-lg">
          <Reveal>
            <p className="mb-4 font-sans text-xs uppercase tracking-wider text-brass">
              Recovery & Wellness
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-bone sm:text-4xl lg:text-5xl">
              The work happens between sessions.
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-display text-lg font-medium text-bone">
                  Infrared Sauna
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-bone/60">
                  Deep tissue penetration at 65°C. Sessions timed to your training load.
                </p>
              </div>
              <div className="h-px w-full bg-hairline" />
              <div>
                <h3 className="font-display text-lg font-medium text-bone">
                  Cold Plunge
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-bone/60">
                  4°C maintained. Protocols for inflammation control and nervous system reset.
                </p>
              </div>
              <div className="h-px w-full bg-hairline" />
              <div>
                <h3 className="font-display text-lg font-medium text-bone">
                  Nutrition
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-bone/60">
                  Meal plans built around your training cycle. Adjusted weekly, not annually.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
