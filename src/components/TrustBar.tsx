export function TrustBar() {
  const items = [
    'Eleiko',
    'Rogue',
    'Technogym',
    'Watson Gym Equipment',
    'Sorinex',
    'NSCA Certified Coaching Staff',
  ];

  return (
    <div className="border-y border-hairline bg-brass/[0.06] py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 sm:gap-x-12">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-x-8 gap-y-3">
            {i > 0 && <span className="hidden h-3 w-px bg-brass/20 sm:block" />}
            <span className="font-sans text-[11px] uppercase tracking-wider text-bone/50">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
