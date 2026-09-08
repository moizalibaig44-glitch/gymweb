import { Reveal } from './Reveal';

interface Facility {
  image: string;
  alt: string;
  caption: string;
  label: string;
}

const facilities: Facility[] = [
  {
    image: 'https://images.pexels.com/photos/6388373/pexels-photo-6388373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Moody gym interior with pull-up bars and ropes',
    caption: 'Eleiko platforms, calibrated plates, competition racks.',
    label: 'The Strength Floor',
  },
  {
    image: 'https://images.pexels.com/photos/37816601/pexels-photo-37816601.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sauna with dark wood and stone heater',
    caption: 'Infrared sauna, cold plunge, and contrast therapy suite.',
    label: 'Recovery Suite',
  },
  {
    image: 'https://images.pexels.com/photos/11618177/pexels-photo-11618177.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dumbbell on gym floor with light and shadow',
    caption: 'Private bays for 1-on-1 coaching. No spectators, no waiting.',
    label: 'Private Training Bay',
  },
];

export function Facilities() {
  return (
    <section className="bg-onyx py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <Reveal className="mb-16 lg:mb-24">
          <p className="mb-4 font-sans text-xs uppercase tracking-wider text-brass">
            Facilities
          </p>
          <h2 className="font-display text-3xl font-semibold text-bone sm:text-4xl lg:text-5xl">
            Three rooms. One standard.
          </h2>
        </Reveal>

        <div className="space-y-20 lg:space-y-32">
          {facilities.map((facility, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={facility.label}>
                <div className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-3/5">
                    <div className="relative overflow-hidden border border-hairline">
                      <img
                        src={facility.image}
                        alt={facility.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] ease-smooth hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-onyx/20" />
                    </div>
                  </div>
                  <div className="lg:w-2/5">
                    <p className="font-sans text-[11px] uppercase tracking-wider text-brass">
                      0{i + 1} — {facility.label}
                    </p>
                    <p className="mt-4 font-display text-xl font-medium leading-snug text-bone lg:text-2xl">
                      {facility.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
