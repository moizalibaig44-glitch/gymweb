import { Reveal } from './Reveal';

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Initiate',
    price: 'PKR 45,000',
    period: '/ month',
    description: 'Full club access during standard hours.',
    features: [
      'Strength floor & equipment access',
      'Two coached sessions monthly',
      'Recovery suite access',
      'Programming app integration',
    ],
    featured: false,
  },
  {
    name: 'Athlete',
    price: 'PKR 85,000',
    period: '/ month',
    description: 'Unlimited access with dedicated coaching.',
    features: [
      '24-hour club access',
      'Weekly 1-on-1 coaching sessions',
      'Custom periodized programming',
      'Recovery suite + nutrition planning',
      'Quarterly performance testing',
    ],
    featured: true,
  },
  {
    name: 'Private',
    price: 'By arrangement',
    period: '',
    description: 'Dedicated bay, coach, and programming.',
    features: [
      'Private training bay reservation',
      'Personal head coach assignment',
      'Full nutrition & recovery protocol',
      'Priority scheduling — any hour',
      'Guest privileges for family',
    ],
    featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="bg-onyx py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <Reveal className="mb-16 text-center lg:mb-20">
          <p className="mb-4 font-sans text-xs uppercase tracking-wider text-brass">
            Membership
          </p>
          <h2 className="font-display text-3xl font-semibold text-bone sm:text-4xl lg:text-5xl">
            Three tiers. No discounts.
          </h2>
        </Reveal>

        <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-0">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 120}
              className="w-full max-w-sm lg:w-auto lg:flex-1"
            >
              <div
                className={`relative border border-hairline bg-gradient-to-b from-graphite/30 to-onyx p-8 lg:px-8 lg:py-10 ${
                  tier.featured
                    ? 'lg:-mt-8 lg:mb-4 border-brass/40 lg:scale-[1.03] lg:shadow-2xl lg:shadow-black/50'
                    : ''
                } ${i === 0 ? 'lg:mr-[-12px] lg:z-10' : ''} ${
                  i === 2 ? 'lg:ml-[-12px] lg:z-10' : ''
                } ${i === 1 ? 'lg:z-20' : ''}`}
              >
                {tier.featured && (
                  <span className="absolute -top-px left-8 right-8 h-px bg-brass" />
                )}
                <div className="border-b border-hairline pb-6">
                  <h3 className="font-display text-2xl font-medium text-bone">
                    {tier.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-ash">
                    {tier.description}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-semibold text-bone">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="font-sans text-sm text-ash">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 py-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-sans text-sm text-bone/70"
                    >
                      <span className="mt-1.5 h-px w-3 flex-shrink-0 bg-brass/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  {tier.featured ? (
                    <a
                      href="#contact"
                      className="block border border-brass bg-brass py-3.5 text-center font-sans text-xs uppercase tracking-wider text-onyx transition-colors duration-500 hover:bg-transparent hover:text-brass"
                    >
                      Request an Invitation
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="block border border-bone/20 py-3.5 text-center font-sans text-xs uppercase tracking-wider text-bone/60 transition-colors duration-500 hover:border-bone/40 hover:text-bone"
                    >
                      Apply
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
