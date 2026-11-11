/** An iPhone-style frame with a Dynamic Island around an app screenshot. */
export default function PhoneFrame({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`relative rounded-[3rem] bg-forest-950 p-[0.6rem] shadow-[0_40px_80px_-30px_rgba(7,16,11,0.55)] ring-1 ring-white/10 ${className}`}
    >
      <div className="absolute left-1/2 top-[1.1rem] z-10 h-[1.35rem] w-[28%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="w-full rounded-[2.45rem]"
        width={660}
        height={1434}
      />
    </div>
  );
}
