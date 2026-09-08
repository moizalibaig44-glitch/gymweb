import { Reveal } from './Reveal';

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-bone py-32 lg:py-48">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none"
          aria-hidden
        >
          <span className="font-display text-[280px] font-semibold leading-none text-graphite/15 sm:text-[400px] lg:text-[520px]">
            01
          </span>
        </div>

        <Reveal className="relative z-10">
          <p className="mb-8 font-sans text-xs uppercase tracking-wider text-graphite/50">
            Philosophy
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-onyx sm:text-4xl lg:text-5xl">
            Training is a calibrated instrument.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-graphite/70 sm:text-lg">
            We don't chase fatigue or sell intensity. Every session is programmed against your data — load, recovery, output — and adjusted by a coach who knows your name. The gym is quiet, the work is precise, and the results compound over years, not weeks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
