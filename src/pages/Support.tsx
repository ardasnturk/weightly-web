import { useTranslation } from "react-i18next";
import { LifeBuoy, Mail } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal";
import { FaqList } from "./Home";
import { site } from "../site";

export default function Support() {
  const { t } = useTranslation();
  const tips = t("supportPage.tips", { returnObjects: true }) as { q: string; a: string }[];
  const faq = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];
  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-[120px] dark:bg-brand-600/15" />
      <div className="container-page relative max-w-5xl pb-24 pt-32 md:pt-40">
        <Reveal><p className="eyebrow"><LifeBuoy className="h-4 w-4" aria-hidden="true" />{t("supportPage.eyebrow")}</p></Reveal>
        <Reveal delay={0.05}><h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">{t("supportPage.title")}</h1></Reveal>
        <Reveal delay={0.1}><p className="lead mt-6 max-w-2xl">{t("supportPage.subtitle")}</p></Reveal>

        <Reveal delay={0.15}>
          <section className="relative mt-12 overflow-hidden rounded-[2rem] bg-forest-950 p-8 text-cream-100 sm:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-72 w-72 animate-aurora rounded-full bg-brand-500/30 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{t("supportPage.contactTitle")}</h2>
                <p className="mt-2 max-w-xl text-cream-100/70">{t("supportPage.contactText")}</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${site.email}?subject=Weightly%20Support`}
                className="inline-flex flex-none items-center gap-2 rounded-full bg-cream-50 px-6 py-3 font-semibold text-forest-950"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {t("supportPage.emailButton")}
              </motion.a>
            </div>
          </section>
        </Reveal>

        <section className="mt-20">
          <Reveal><h2 className="text-3xl font-semibold tracking-tight">{t("supportPage.tipsTitle")}</h2></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tips.map((tip, index) => (
              <Reveal key={tip.q} delay={(index % 2) * 0.08}>
                <article className="card h-full p-7">
                  <h3 className="font-semibold">{tip.q}</h3>
                  <p className="muted mt-2 text-[0.95rem] leading-relaxed">{tip.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Reveal><h2 className="mb-6 text-3xl font-semibold tracking-tight">{t("faq.titleA")} {t("faq.titleEm")}</h2></Reveal>
          <Reveal delay={0.05}><FaqList items={faq} /></Reveal>
        </section>
      </div>
    </div>
  );
}
