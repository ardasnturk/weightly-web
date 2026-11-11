import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Camera,
  ChartNoAxesCombined,
  Check,
  Clapperboard,
  Download,
  EyeOff,
  FileText,
  Flag,
  Flame,
  Gift,
  HeartPulse,
  Layers,
  LayoutGrid,
  Lock,
  Mic,
  Moon,
  Palette,
  Pill,
  Plus,
  ScanFace,
  ScanLine,
  Server,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Syringe,
  Tags,
  Target,
  TrendingUp,
  UserX,
  Users,
  Wand2,
  Watch,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AppStoreButton from "../components/AppStoreButton";
import PhoneFrame from "../components/PhoneFrame";
import Marquee from "../components/Marquee";
import Reveal, { WordsReveal } from "../components/Reveal";
import { screen } from "../screens";
import type { ScreenName } from "../screens";
import { people } from "../people";
import { site } from "../site";
import widgets from "../assets/app/widget-medium.jpg";
import watch from "../assets/app/watch-log.png";

type Item = { key: string; icon: LucideIcon };

const ease = [0.22, 1, 0.36, 1] as const;

const newItems: (Item & { span?: string })[] = [
  { key: "spike", icon: Zap, span: "md:col-span-2" },
  { key: "cycle", icon: Moon },
  { key: "partner", icon: Users, span: "md:row-span-2" },
  { key: "medication", icon: Pill },
  { key: "share", icon: Share2 },
  { key: "siri", icon: Mic },
  { key: "whatsnew", icon: Sparkles },
];

const featureItems: Item[] = [
  { key: "trend", icon: ChartNoAxesCombined },
  { key: "health", icon: HeartPulse },
  { key: "goals", icon: Target },
  { key: "body", icon: Camera },
  { key: "hide", icon: EyeOff },
  { key: "glp1", icon: Syringe },
  { key: "export", icon: Download },
  { key: "lock", icon: ScanFace },
];

const everywhereItems: Item[] = [
  { key: "widgets", icon: LayoutGrid },
  { key: "watch", icon: Watch },
  { key: "siri", icon: Mic },
  { key: "control", icon: SlidersHorizontal },
];

const proItems: (Item & { fresh?: boolean })[] = [
  { key: "summary", icon: Brain, fresh: true },
  { key: "tags", icon: Tags, fresh: true },
  { key: "cyclePattern", icon: Moon, fresh: true },
  { key: "dose", icon: Syringe, fresh: true },
  { key: "energy", icon: Flame, fresh: true },
  { key: "composition", icon: Layers, fresh: true },
  { key: "planner", icon: Wand2, fresh: true },
  { key: "ghost", icon: ScanLine, fresh: true },
  { key: "icons", icon: Palette, fresh: true },
  { key: "insights", icon: Sparkles },
  { key: "milestones", icon: Flag },
  { key: "report", icon: FileText },
  { key: "timelapse", icon: Clapperboard },
  { key: "widgets", icon: BarChart3 },
];

const privacyItems: Item[] = [
  { key: "account", icon: UserX },
  { key: "device", icon: Lock },
  { key: "ads", icon: Server },
  { key: "health", icon: HeartPulse },
];

const gallery: { screen: ScreenName; photo: keyof typeof people }[] = [
  { screen: "today", photo: "today" },
  { screen: "trends", photo: "trends" },
  { screen: "insights", photo: "insights" },
  { screen: "body", photo: "body" },
  { screen: "log", photo: "log" },
  { screen: "medication", photo: "medication" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <TrendStory />
      <WhatsNew />
      <Gallery />
      <Features />
      <Everywhere />
      <Pro />
      <Atleva />
      <Privacy />
      <Faq />
      <FinalCta />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const chips = ["rate", "spike", "cycle", "goal"] as const;
  const chipPlaces = [
    "-left-6 top-20 sm:-left-20",
    "-right-4 top-48 sm:-right-24",
    "-left-4 bottom-32 sm:-left-28",
    "-right-2 bottom-12 sm:-right-16",
  ];

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-28 sm:pt-36 md:pb-28">
      <Aurora />
      <div className="container-page relative grid items-center gap-16 md:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Link
              to="/#new"
              className="group inline-flex items-center gap-2 rounded-full border border-brand-600/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-forest-900 shadow-sm backdrop-blur transition hover:border-brand-600/40 dark:border-white/10 dark:bg-white/5 dark:text-cream-100"
            >
              <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-semibold text-white">2.1</span>
              {t("hero.eyebrow")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
          <h1 className="mt-8 text-[3.4rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.6rem]">
            <WordsReveal text={t("hero.titleA")} delay={0.1} />{" "}
            <WordsReveal text={t("hero.titleEm")} className="serif pr-2" wordClassName="text-shine pr-[0.08em]" delay={0.25} />
            <br className="hidden sm:block" /> <WordsReveal text={t("hero.titleB")} delay={0.4} />
          </h1>
          <motion.p
            className="lead mt-7 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            <AppStoreButton />
            <Link to="/#features" className="group inline-flex items-center gap-2 font-semibold text-forest-900 dark:text-cream-100">
              {t("hero.explore")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.p
            className="muted mt-7 flex items-center gap-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
            {t("hero.note")}
          </motion.p>
        </motion.div>

        <motion.div style={{ y: phoneY }} className="relative mx-auto w-full max-w-[19.5rem]">
          <HeroTrend />
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 4, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          >
            <div className="animate-float">
              <PhoneFrame src={screen(i18n.resolvedLanguage, "today")} alt={t("hero.imageAlt")} eager />
            </div>
          </motion.div>
          {chips.map((chip, index) => (
            <motion.div
              key={chip}
              className={`absolute z-20 ${chipPlaces[index]} ${index >= 2 ? "hidden sm:block" : ""}`}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: 1.1 + index * 0.18 }}
            >
              <div className="glass flex max-w-[11rem] items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium sm:max-w-[13.5rem] sm:gap-2.5 sm:px-3.5 sm:py-2.5 sm:text-sm" style={{ animation: `float ${6 + index}s ease-in-out ${index * 0.7}s infinite` }}>
                <span className={`h-2.5 w-2.5 flex-none rounded-full ${["bg-brand-500", "bg-sunrise-500", "bg-violet-400", "bg-sky-400"][index]}`} />
                {t(`hero.chips.${chip}`)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-aurora rounded-full bg-brand-300/40 blur-[110px] dark:bg-brand-600/25" />
      <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] animate-aurora rounded-full bg-sunrise-400/25 blur-[120px] [animation-delay:-6s] dark:bg-sunrise-500/15" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-aurora rounded-full bg-sky-300/25 blur-[120px] [animation-delay:-12s] dark:bg-sky-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(12,26,18,0.08)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)]" />
    </div>
  );
}

/** Noisy weigh-ins appear behind the phone while the smooth trend draws through them. */
function HeroTrend() {
  const points = trendPoints(34, 26);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.trendY.toFixed(1)}`).join(" ");
  return (
    <svg viewBox="0 0 400 260" className="absolute -left-[45%] top-1/2 -z-0 w-[190%] -translate-y-1/2 opacity-90" aria-hidden="true">
      <defs>
        <linearGradient id="heroLine" x1="0" x2="1">
          <stop offset="0" stopColor="#32d583" stopOpacity="0" />
          <stop offset="0.25" stopColor="#32d583" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
      </defs>
      {points.map((p, i) => (
        <motion.circle
          key={p.x}
          cx={p.x}
          cy={p.rawY}
          r="3"
          className="fill-forest-900/25 dark:fill-cream-100/25"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.03, duration: 0.4 }}
        />
      ))}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#heroLine)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, delay: 0.8, ease: "easeInOut" }}
      />
    </svg>
  );
}

function trendPoints(count: number, step: number, top = 40, height = 180) {
  return Array.from({ length: count }, (_, day) => {
    const trend = 80 - day * 0.075;
    const noise = Math.sin(day * 1.7) * 0.55 + Math.cos(day * 0.9) * 0.4;
    const y = (kg: number) => top + (81 - kg) * (height / 4);
    return { x: 10 + day * (step * 0.45), rawY: y(trend + noise), trendY: y(trend) };
  });
}

/* ───────────────────────── Ribbon ───────────────────────── */

function Ribbon() {
  const { t } = useTranslation();
  return (
    <section aria-label={t("marqueeLabel")} className="border-y border-forest-900/[0.07] bg-white/40 dark:border-white/10 dark:bg-white/[0.02]">
      <Marquee items={t("marquee", { returnObjects: true }) as string[]} />
    </section>
  );
}

/* ───────────────────────── Trend story ───────────────────────── */

function TrendStory() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 45%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const points = trendPoints(40, 26, 30, 200);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.trendY.toFixed(1)}`).join(" ");
  const stats = t("trend.stats", { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section className="container-page py-20 md:py-28">
      <div ref={ref} className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal><p className="eyebrow"><TrendingUp className="h-4 w-4" aria-hidden="true" />{t("trend.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              {t("trend.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("trend.titleEm")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-6">{t("trend.body")}</p></Reveal>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.15 + index * 0.08}>
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</p>
                <p className="muted mt-1 text-sm">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="card relative overflow-hidden p-6 sm:p-8">
          <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label={`${t("trend.scale")} · ${t("trend.line")}`}>
            {[60, 110, 160, 210].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} className="stroke-forest-900/[0.06] dark:stroke-white/[0.06]" />
            ))}
            {points.map((p, i) => (
              <ScrollDot key={p.x} cx={p.x} cy={p.rawY} progress={progress} at={i / points.length} />
            ))}
            <motion.path d={path} fill="none" strokeWidth="5" strokeLinecap="round" className="stroke-brand-500" style={{ pathLength: progress }} />
          </svg>
          <div className="muted mt-4 flex gap-6 text-sm">
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-forest-900/30 dark:bg-cream-100/30" />{t("trend.scale")}</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-5 rounded-full bg-brand-500" />{t("trend.line")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollDot({ cx, cy, progress, at }: { cx: number; cy: number; progress: MotionValue<number>; at: number }) {
  const opacity = useTransform(progress, [Math.max(0, at - 0.15), at], [0, 1]);
  const scale = useTransform(progress, [Math.max(0, at - 0.15), at], [0, 1]);
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={3.5}
      style={{ opacity, scale, transformBox: "fill-box", transformOrigin: "center" }}
      className="fill-forest-900/30 dark:fill-cream-100/30"
    />
  );
}

/* ───────────────────────── New in 2.1 ───────────────────────── */

function WhatsNew() {
  const { t } = useTranslation();
  return (
    <section id="new" className="relative scroll-mt-24 pb-24 pt-8 md:pb-32 md:pt-12">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow"><Sparkles className="h-4 w-4" aria-hidden="true" />{t("new.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              {t("new.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("new.titleEm")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-6">{t("new.subtitle")}</p></Reveal>
        </div>
        <div className="mt-14 grid auto-rows-[minmax(14rem,auto)] gap-4 md:grid-cols-3">
          {newItems.map(({ key, icon, span }, index) => (
            <Reveal key={key} delay={index * 0.06} className={span ?? ""}>
              <SpotlightCard className="h-full">
                {key === "partner" ? (
                  <PartnerCard icon={icon} />
                ) : (
                  <div className="flex h-full flex-col p-7">
                    <IconBadge icon={icon} />
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{t(`new.items.${key}.title`)}</h3>
                    <p className="muted mt-2 leading-relaxed">{t(`new.items.${key}.text`)}</p>
                    {key === "spike" && <SpikeVisual />}
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ icon }: { icon: LucideIcon }) {
  const { t } = useTranslation();
  return (
    <div className="flex h-full min-h-[30rem] flex-col">
      <div className="relative min-h-[15rem] flex-1 overflow-hidden">
        <img
          src={people.partner}
          alt={t("new.items.partner.alt")}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_80%] transition-transform duration-[1.5s] group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
      <div className="p-7">
        <IconBadge icon={icon} />
        <h3 className="mt-5 text-xl font-semibold tracking-tight">{t("new.items.partner.title")}</h3>
        <p className="muted mt-2 leading-relaxed">{t("new.items.partner.text")}</p>
      </div>
    </div>
  );
}

/** A small chart where one weigh-in jumps and gets explained. */
function SpikeVisual() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const bars = [52, 50, 51, 49, 50, 48, 49, 47, 72, 50, 48];
  return (
    <div ref={ref} className="mt-6 flex items-end gap-4">
      <div className="flex h-28 flex-1 items-end gap-1.5">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            className={`flex-1 rounded-t-md ${index === 8 ? "bg-gradient-to-t from-sunrise-500 to-sunrise-400" : "bg-brand-500/30"}`}
            initial={{ height: 0 }}
            animate={inView ? { height: `${height}%` } : {}}
            transition={{ duration: 0.7, delay: index * 0.05, ease }}
          />
        ))}
      </div>
      <motion.div
        className="glass hidden max-w-[14rem] rounded-2xl p-3 text-sm sm:block"
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.6, ease }}
      >
        <p className="font-semibold">{t("new.items.spike.bubbleTitle")}</p>
        <p className="muted mt-1">{t("new.items.spike.bubbleText")}</p>
      </motion.div>
    </div>
  );
}

function IconBadge({ icon: Icon, light = false }: { icon: LucideIcon; light?: boolean }) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
        light ? "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur" : "bg-brand-600/10 text-brand-700 dark:bg-brand-400/10 dark:text-brand-300"
      }`}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </span>
  );
}

/** A card with a soft light that follows the pointer. */
function SpotlightCard({ children, className = "", dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  const [spot, setSpot] = useState({ x: 50, y: 50, on: false });
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpot({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100, on: true });
  };
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((value) => ({ ...value, on: false }))}
      className={`group relative overflow-hidden rounded-[1.75rem] ${dark ? "border border-white/10 bg-white/[0.04]" : "card"} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spot.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, ${dark ? "rgba(108,233,166,0.14)" : "rgba(50,213,131,0.16)"}, transparent 60%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

/* ───────────────────────── Gallery (sticky horizontal scroll) ───────────────────────── */

function Gallery() {
  const { t, i18n } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((gallery.length - 1) / gallery.length) * 100}%`]);

  const cards = gallery.map((item, index) => (
    <figure key={item.screen} className="relative h-[34rem] w-[85vw] flex-none snap-center overflow-hidden rounded-[2rem] sm:w-[26rem] md:h-[min(36rem,calc(100vh-15rem))] md:w-[30rem]">
      <img src={people[item.photo]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
      <div className="absolute right-5 top-5 w-[42%] rotate-[3deg] transition-transform duration-700 hover:rotate-0 md:w-[44%]">
        <PhoneFrame src={screen(i18n.resolvedLanguage, item.screen)} alt={t(`gallery.items.${item.screen}.title`)} />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-7 text-cream-50">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{t(`gallery.items.${item.screen}.title`)}</h3>
        <p className="mt-2 max-w-sm text-cream-50/80">{t(`gallery.items.${item.screen}.text`)}</p>
      </figcaption>
    </figure>
  ));

  return (
    <section ref={ref} className="relative bg-forest-950 text-cream-100 md:h-[420vh]">
      <div className="md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden">
        <div className="container-page pb-8 pt-24 md:pt-28">
          <Reveal><p className="eyebrow !text-brand-300">{t("gallery.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4 max-w-3xl">
              {t("gallery.titleA")} <span className="serif text-brand-300">{t("gallery.titleEm")}</span>
            </h2>
          </Reveal>
        </div>
        <motion.div style={{ x }} className="hidden gap-6 pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:flex">
          {cards}
        </motion.div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-20 md:hidden">{cards}</div>
      </div>
    </section>
  );
}

/* ───────────────────────── Free features ───────────────────────── */

function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="container-page scroll-mt-24 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal><p className="eyebrow">{t("features.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              {t("features.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("features.titleEm")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-6">{t("features.subtitle")}</p></Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-2 text-sm font-semibold text-brand-700 dark:bg-brand-400/10 dark:text-brand-300">
              <Check className="h-4 w-4" aria-hidden="true" />
              {t("features.free")}
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featureItems.map(({ key, icon }, index) => (
            <Reveal key={key} delay={(index % 2) * 0.08}>
              <SpotlightCard className="h-full">
                <div className="p-7">
                  <IconBadge icon={icon} />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{t(`features.items.${key}.title`)}</h3>
                  <p className="muted mt-2 text-[0.95rem] leading-relaxed">{t(`features.items.${key}.text`)}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Everywhere ───────────────────────── */

function Everywhere() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const widgetY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const watchY = useTransform(scrollYProgress, [0, 1], [120, -100]);
  return (
    <section className="relative overflow-hidden bg-cream-200/60 py-24 md:py-32 dark:bg-forest-900/60">
      <div ref={ref} className="container-page grid items-center gap-16 md:grid-cols-2">
        <div className="relative order-2 grid grid-cols-[1.4fr_1fr] items-end gap-6 md:order-1">
          <motion.div style={{ y: widgetY }}>
            <PhoneFrame src={widgets} alt={t("everywhere.widgetAlt")} />
          </motion.div>
          <motion.div style={{ y: watchY }} className="rounded-[2.6rem] bg-forest-950 p-3 shadow-2xl ring-1 ring-white/10">
            <img src={watch} alt={t("everywhere.watchAlt")} loading="lazy" className="w-full rounded-[2rem]" />
          </motion.div>
        </div>
        <div className="order-1 md:order-2">
          <Reveal><p className="eyebrow">{t("everywhere.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              {t("everywhere.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("everywhere.titleEm")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-6">{t("everywhere.subtitle")}</p></Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {everywhereItems.map(({ key, icon: Icon }, index) => (
              <Reveal as="li" key={key} delay={0.1 + index * 0.06} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm dark:bg-white/10 dark:text-brand-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{t(`everywhere.${key}.title`)}</h3>
                  <p className="muted mt-1 text-sm leading-relaxed">{t(`everywhere.${key}.text`)}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRO ───────────────────────── */

function Pro() {
  const { t } = useTranslation();
  return (
    <section id="pro" className="relative scroll-mt-24 overflow-hidden bg-forest-950 py-24 text-cream-100 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-[30rem] w-[30rem] animate-aurora rounded-full bg-brand-500/25 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] animate-aurora rounded-full bg-sunrise-500/20 blur-[120px] [animation-delay:-9s]" />
      </div>
      <div className="container-page relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal><p className="eyebrow !text-brand-300">{t("pro.eyebrow")}</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-4">
                {t("pro.titleA")} <span className="serif text-brand-300">{t("pro.titleEm")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}><p className="mt-6 text-lg leading-relaxed text-cream-100/70">{t("pro.subtitle")}</p></Reveal>
          </div>
          <div className="grid gap-3">
            <Reveal delay={0.15}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                <Gift className="mt-0.5 h-5 w-5 flex-none text-brand-300" aria-hidden="true" />
                <p className="text-cream-100/85">{t("pro.gift")}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sunrise-400 via-sunrise-500 to-sunrise-600 p-[1px]">
                <div className="flex items-start gap-3 rounded-[15px] bg-forest-950/80 p-5 backdrop-blur">
                  <span className="mt-0.5 rounded-full bg-gradient-to-r from-sunrise-400 to-sunrise-600 px-2 py-0.5 text-xs font-bold text-white">−50%</span>
                  <p className="text-cream-100/85">{t("pro.welcome")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proItems.map(({ key, icon, fresh }, index) => (
            <Reveal key={key} delay={(index % 4) * 0.06}>
              <SpotlightCard dark className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={icon} light />
                    {fresh && <span className="rounded-full bg-brand-400/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-brand-300">{t("pro.newBadge")}</span>}
                  </div>
                  <h3 className="mt-5 font-semibold tracking-tight">{t(`pro.items.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/65">{t(`pro.items.${key}.text`)}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-10 max-w-3xl text-sm text-cream-100/60">{t("pro.plans")}</p></Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Atleva ───────────────────────── */

function Atleva() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section className="container-page py-24 md:py-32">
      <Reveal>
        <div ref={ref} className="relative overflow-hidden rounded-[2.25rem]">
          <motion.img src={people.wide} alt="" loading="lazy" style={{ y: imageY }} className="absolute inset-0 h-[116%] w-full -translate-y-[8%] object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/85 to-transparent dark:from-forest-950 dark:via-forest-950/85" />
          <div className="relative max-w-xl p-8 sm:p-14 md:py-20">
            <p className="eyebrow">{t("atleva.eyebrow")}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              {t("atleva.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("atleva.titleEm")}</span>
            </h2>
            <p className="lead mt-5">{t("atleva.body")}</p>
            <a
              href={site.atleva}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-cream-100 dark:text-forest-950"
            >
              {t("atleva.button")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────────────────── Privacy ───────────────────────── */

function Privacy() {
  const { t } = useTranslation();
  return (
    <section className="container-page pb-24 md:pb-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <Reveal><p className="eyebrow"><ShieldCheck className="h-4 w-4" aria-hidden="true" />{t("privacy.eyebrow")}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-4">
              {t("privacy.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("privacy.titleEm")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-6">{t("privacy.subtitle")}</p></Reveal>
          <Reveal delay={0.15}>
            <Link to="/privacy" className="group mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 dark:text-brand-300">
              {t("privacy.link")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {privacyItems.map(({ key, icon }, index) => (
            <Reveal key={key} delay={index * 0.07}>
              <SpotlightCard className="h-full">
                <div className="p-7">
                  <IconBadge icon={icon} />
                  <h3 className="mt-5 font-semibold">{t(`privacy.points.${key}.title`)}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed">{t(`privacy.points.${key}.text`)}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-forest-900/10 border-y border-forest-900/10 dark:divide-white/10 dark:border-white/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-tight"
            >
              {item.q}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors ${isOpen ? "bg-brand-600 text-white" : "bg-forest-900/[0.06] dark:bg-white/10"}`}
              >
                <Plus className="h-5 w-5" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="muted max-w-3xl pb-6 leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function Faq() {
  const { t } = useTranslation();
  return (
    <section className="container-page pb-24 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h2 className="section-title">
            {t("faq.titleA")} <span className="serif text-brand-700 dark:text-brand-300">{t("faq.titleEm")}</span>
          </h2>
          <p className="lead mt-6">{t("faq.subtitle")}</p>
          <Link to="/support" className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 dark:text-brand-300">
            {t("faq.support")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <FaqList items={t("faq.items", { returnObjects: true }) as { q: string; a: string }[]} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */

function FinalCta() {
  const { t } = useTranslation();
  const photos = [people.today, people.log, people.medication, people.body];
  return (
    <section id="download" className="container-page scroll-mt-24 pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-500 px-6 py-16 text-center text-white sm:px-12 md:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex justify-between opacity-30 mix-blend-luminosity">
            {photos.map((photo, index) => (
              <motion.img
                key={photo}
                src={photo}
                alt=""
                loading="lazy"
                className="h-full w-1/4 object-cover"
                initial={{ opacity: 0, y: index % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.12, ease }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700/90 via-brand-600/85 to-emerald-500/80" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              {t("cta.titleA")} <span className="serif">{t("cta.titleEm")}</span>
            </h2>
            <p className="mt-5 text-lg text-white/85">{t("cta.subtitle")}</p>
            <AppStoreButton className="mt-9" inverted />
            <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              {t("hero.note").split(" · ").map((point) => (
                <li key={point} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
