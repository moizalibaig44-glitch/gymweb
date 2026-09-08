import { Reveal } from './Reveal';

interface Coach {
  name: string;
  specialty: string;
  image: string;
  alt: string;
}

const coaches: Coach[] = [
  {
    name: 'Daniyal Raza',
    specialty: 'Powerlifting · Peak Strength',
    image: 'https://images.pexels.com/photos/4398351/pexels-photo-4398351.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Portrait of a focused athlete in a gym',
  },
  {
    name: 'Ayesha Khan',
    specialty: 'Olympic Lifting · Mobility',
    image: 'https://images.pexels.com/photos/39134632/pexels-photo-39134632.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Determined female boxer in a dark gym',
  },
  {
    name: 'Bilal Ahmed',
    specialty: 'Hypertrophy · Body Recomposition',
    image: 'https://images.pexels.com/photos/8874427/pexels-photo-8874427.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Muscular man in a powerful pose',
  },
  {
    name: 'Zara Malik',
    specialty: 'Performance Nutrition · Recovery',
    image: 'https://images.pexels.com/photos/28250752/pexels-photo-28250752.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Woman pausing during her workout',
  },
];

export function Coaches() {
  return (
    <section className="bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <Reveal className="mb-16 lg:mb-20">
          <p className="mb-4 font-sans text-xs uppercase tracking-wider text-graphite/50">
            Coaches
          </p>
          <h2 className="font-display text-3xl font-semibold text-onyx sm:text-4xl lg:text-5xl">
            The people behind the programming.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 100}>
              <div className="group">
                <div className="relative overflow-hidden border border-graphite/15">
                  <img
                    src={coach.image}
                    alt={coach.alt}
                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-[1.2s] ease-smooth group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-onyx">
                  {coach.name}
                </h3>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-graphite/50">
                  {coach.specialty}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
