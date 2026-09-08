import { Reveal } from './Reveal';

export function CoffeeBar() {
  return (
    <section className="bg-brass py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <Reveal className="lg:w-2/3">
            <div className="relative h-full overflow-hidden border border-onyx/20">
              <img
                src="https://images.pexels.com/photos/6771897/pexels-photo-6771897.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Espresso cup casting shadows on a dark surface with coffee granules"
                className="h-full min-h-[320px] w-full object-cover sm:min-h-[420px] lg:min-h-[520px]"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:w-1/3 lg:flex lg:flex-col lg:justify-center">
            <p className="mb-4 font-sans text-xs uppercase tracking-wider text-onyx/50">
              Coffee & Protein Bar
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-onyx sm:text-4xl">
              The counter between sets.
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-onyx/70 sm:text-base">
              Pre-workout espresso and a protein counter stocked for before and after training. No menu, no queue — walk up, order, get back to work.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-onyx/30 px-6 py-3.5 font-sans text-xs uppercase tracking-wider text-onyx transition-colors duration-500 hover:border-onyx hover:bg-onyx hover:text-brass"
              >
                See the counter
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
