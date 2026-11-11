/** An endless, slowly scrolling ribbon of words (pauses on hover). */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap text-2xl font-medium tracking-tight text-forest-900/70 sm:text-3xl dark:text-cream-100/70">
            {item}
            <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
