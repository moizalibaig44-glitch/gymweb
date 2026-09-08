import { useEffect, useState } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `translateY(${scrollY * 0.35}px) scale(1.1)`,
        }}
      >
        <img
          src="https://images.pexels.com/photos/4753885/pexels-photo-4753885.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Rack of dumbbells in a dimly lit gym"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-onyx/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 sm:pb-20 lg:px-20 lg:pb-28">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brass" />
            <p className="font-sans text-xs uppercase tracking-wider text-brass">
              DHA, Karachi — By Application
            </p>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-bone sm:text-5xl lg:text-7xl">
            Strength is a discipline,<br />not a hobby.
          </h1>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-bone/60 sm:text-base">
            A private strength and performance club for those who train with intent. Membership is limited and by referral.
          </p>
          <div className="mt-10">
            <a
              href="#membership"
              className="inline-flex items-center gap-3 border border-bone/30 px-8 py-4 font-sans text-xs uppercase tracking-wider text-bone transition-colors duration-500 hover:border-brass hover:text-brass"
            >
              Request an Invitation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden lg:block">
        <p className="font-sans text-[10px] uppercase tracking-wider text-bone/30">
          Scroll
        </p>
      </div>
    </section>
  );
}
