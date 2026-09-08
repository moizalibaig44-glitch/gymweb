import { Reveal } from './Reveal';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I've trained at clubs in London and Dubai. ATLAS is the only place that programs around my travel schedule instead of against it.",
    name: 'Omar Sheikh',
    title: 'Managing Partner, Private Equity',
  },
  {
    quote:
      "They rebuilt my squat after two years of chronic pain. No gimmicks, no corrective exercise theatre — just precise loading and patience.",
    name: 'Dr. Sana Mirza',
    title: 'Consultant Cardiologist',
  },
  {
    quote:
      "It's the only gym in Karachi where no one asks to work in. That sounds small until you've trained here for a month.",
    name: 'Hamza Tariq',
    title: 'National-Level Powerlifter',
  },
];

export function Testimonials() {
  return (
    <section className="bg-onyx py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <blockquote className="flex h-full flex-col">
                <p className="font-display text-xl italic leading-relaxed text-bone/90 lg:text-2xl">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-hairline pt-5">
                  <div className="h-12 w-16 flex-shrink-0 border border-hairline bg-graphite/20" />
                  <div>
                    <p className="font-sans text-sm font-medium text-bone">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-ash">
                      {t.title}
                    </p>
                  </div>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
