import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-onyx">
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:py-32">
          <Reveal className="text-center">
            <p className="font-display text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
              ATLAS
            </p>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-bone/50">
              A private strength and performance club. Membership is limited and by application.
            </p>
            <div className="mt-10">
              <a
                href="#membership"
                className="inline-flex items-center gap-3 border border-bone/30 px-8 py-4 font-sans text-xs uppercase tracking-wider text-bone transition-colors duration-500 hover:border-brass hover:text-brass"
              >
                Request an Invitation
              </a>
            </div>
          </Reveal>

          <div className="mx-auto mt-20 flex max-w-3xl flex-col items-center justify-between gap-6 border-t border-hairline pt-8 sm:flex-row">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="font-sans text-xs text-ash">
                14-C, Bukhari Commercial, DHA Phase 6, Karachi
              </p>
              <p className="font-sans text-xs text-ash">
                applications@atlas.pk
              </p>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-xs uppercase tracking-wider text-ash transition-colors duration-300 hover:text-brass"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-12 text-center font-sans text-[10px] uppercase tracking-wider text-bone/20">
            © 2026 ATLAS Strength & Performance Club
          </p>
        </div>
      </div>
    </footer>
  );
}
