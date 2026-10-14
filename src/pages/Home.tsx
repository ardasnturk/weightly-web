import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Activity,
  BarChart3,
  Camera,
  ChartNoAxesCombined,
  Check,
  Clapperboard,
  Download,
  EyeOff,
  FileText,
  Flag,
  Gift,
  HeartPulse,
  LayoutGrid,
  Lock,
  Mic,
  Palette,
  ScanFace,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Syringe,
  Target,
  UserX,
  Watch,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AppStoreButton from "../components/AppStoreButton";
import PhoneFrame from "../components/PhoneFrame";
import today from "../assets/app/today-en.jpg";
import trends from "../assets/app/trends-en.jpg";
import widgets from "../assets/app/widget-medium.jpg";
import watch from "../assets/app/watch-log.png";

type Item = { key: string; icon: LucideIcon };

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

const proItems: Item[] = [
  { key: "insights", icon: Sparkles },
  { key: "milestones", icon: Flag },
  { key: "report", icon: FileText },
  { key: "timelapse", icon: Clapperboard },
  { key: "widgets", icon: BarChart3 },
  { key: "themes", icon: Palette },
];

const privacyItems: Item[] = [
  { key: "account", icon: UserX },
  { key: "device", icon: Lock },
  { key: "ads", icon: Server },
  { key: "health", icon: HeartPulse },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(50,213,131,0.22),transparent_60%)]"
        />
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100 dark:bg-brand-900/40 dark:text-brand-300 dark:ring-brand-800">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{t("hero.title")}</h1>
            <p className="lead mt-6 max-w-xl">{t("hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-500">
              <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {t("hero.note")}
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[19rem] animate-rise [animation-delay:150ms]">
            <PhoneFrame src={today} alt={t("hero.imageAlt")} />
            <div className="absolute -left-14 bottom-16 hidden w-44 rotate-[-6deg] lg:block">
              <PhoneFrame src={trends} alt="" className="scale-90 opacity-95" />
            </div>
          </div>
        </div>
      </section>

      {/* Trend explainer */}
      <section className="container-page py-16 md:py-24">
        <div className="card grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow">{t("trend.eyebrow")}</p>
            <h2 className="section-title mt-3">{t("trend.title")}</h2>
            <p className="lead mt-5">{t("trend.body")}</p>
          </div>
          <TrendIllustration scale={t("trend.scale")} line={t("trend.line")} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-page scroll-mt-20 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("features.eyebrow")}</p>
          <h2 className="section-title mt-3">{t("features.title")}</h2>
          <p className="lead mt-5">{t("features.subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureItems.map(({ key, icon: Icon }) => (
            <article key={key} className="card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{t(`features.items.${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{t(`features.items.${key}.text`)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Everywhere */}
      <section className="bg-ink-50/70 py-16 md:py-24 dark:bg-ink-900/40">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 grid grid-cols-[1.4fr_1fr] items-end gap-6 md:order-1">
            <PhoneFrame src={widgets} alt={t("everywhere.widgetAlt")} />
            <div className="rounded-[2.5rem] bg-ink-950 p-3 shadow-2xl ring-1 ring-ink-800">
              <img src={watch} alt={t("everywhere.watchAlt")} loading="lazy" className="w-full rounded-[2rem]" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">{t("everywhere.eyebrow")}</p>
            <h2 className="section-title mt-3">{t("everywhere.title")}</h2>
            <p className="lead mt-5">{t("everywhere.subtitle")}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {everywhereItems.map(({ key, icon: Icon }) => (
                <li key={key} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-none text-brand-600 dark:text-brand-400" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">{t(`everywhere.${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{t(`everywhere.${key}.text`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRO */}
      <section id="pro" className="container-page scroll-mt-20 py-16 md:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-500 p-8 text-white md:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-100">{t("pro.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{t("pro.title")}</h2>
            <p className="mt-5 text-lg text-brand-50/90">{t("pro.subtitle")}</p>
            <p className="mt-6 inline-flex items-start gap-3 rounded-2xl bg-white/15 px-4 py-3 font-medium ring-1 ring-white/25 backdrop-blur">
              <Gift className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
              {t("pro.gift")}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proItems.map(({ key, icon: Icon }) => (
              <article key={key} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{t(`pro.items.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-50/85">{t(`pro.items.${key}.text`)}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-brand-50/85">{t("pro.plans")}</p>
        </div>
      </section>

      {/* Privacy */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">{t("privacy.eyebrow")}</p>
            <h2 className="section-title mt-3">{t("privacy.title")}</h2>
            <p className="lead mt-5">{t("privacy.subtitle")}</p>
            <Link to="/privacy" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline dark:text-brand-400">
              {t("privacy.link")} →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {privacyItems.map(({ key, icon: Icon }) => (
              <article key={key} className="card p-6">
                <Icon className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{t(`privacy.points.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400">{t(`privacy.points.${key}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 md:py-24">
        <h2 className="section-title">{t("faq.title")}</h2>
        <div className="mt-10 divide-y divide-ink-100 border-y border-ink-100 dark:divide-ink-800 dark:border-ink-800">
          {(t("faq.items", { returnObjects: true }) as { q: string; a: string }[]).map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                {item.q}
                <span className="text-2xl font-light text-ink-400 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-ink-600 dark:text-ink-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="container-page scroll-mt-20 pb-24">
        <div className="card flex flex-col items-center px-6 py-14 text-center">
          <Activity className="h-10 w-10 text-brand-600" aria-hidden="true" />
          <h2 className="section-title mt-5 max-w-2xl">{t("cta.title")}</h2>
          <p className="lead mt-4 max-w-2xl">{t("cta.subtitle")}</p>
          <AppStoreButton className="mt-8" />
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-500">
            {["hero.note"].flatMap((key) => t(key).split(" · ")).map((point) => (
              <li key={point} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/** Noisy daily weigh-ins (dots) with a smooth trend line drawn over them. */
function TrendIllustration({ scale, line }: { scale: string; line: string }) {
  const days = 40;
  const points = Array.from({ length: days }, (_, day) => {
    const trend = 80 - day * 0.07;
    const noise = Math.sin(day * 1.7) * 0.55 + Math.cos(day * 0.9) * 0.35;
    return { x: 20 + day * 11.5, raw: trend + noise, trend };
  });
  const y = (kg: number) => 30 + (81 - kg) * 70;
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${y(point.trend).toFixed(1)}`).join(" ");

  return (
    <figure className="w-full">
      <svg viewBox="0 0 480 260" className="w-full" role="img" aria-label={`${scale} · ${line}`}>
        {points.map((point) => (
          <circle key={point.x} cx={point.x} cy={y(point.raw)} r="3.5" className="fill-ink-400/60" />
        ))}
        <path
          d={path}
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          className="animate-draw stroke-brand-500"
          style={{ strokeDasharray: 1200 }}
        />
      </svg>
      <figcaption className="mt-3 flex gap-6 text-sm text-ink-500">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-400/70" />
          {scale}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-5 rounded-full bg-brand-500" />
          {line}
        </span>
      </figcaption>
    </figure>
  );
}
