/** A simple iPhone-style frame around an app screenshot. */
export default function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.9rem] bg-ink-950 p-2.5 shadow-2xl shadow-ink-950/25 ring-1 ring-ink-800 dark:shadow-black/60 ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="w-full rounded-[2.35rem]" width={720} height={1565} />
    </div>
  );
}
