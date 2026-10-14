import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { site } from "../site";

export default function Support() {
  const { t } = useTranslation();
  const tips = t("supportPage.tips", { returnObjects: true }) as { q: string; a: string }[];
  const faq = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];
  return (
    <div className="container-page max-w-4xl py-16 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("supportPage.title")}</h1>
      <p className="lead mt-4">{t("supportPage.subtitle")}</p>

      <section className="card mt-10 flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{t("supportPage.contactTitle")}</h2>
          <p className="mt-2 max-w-xl text-ink-600 dark:text-ink-400">{t("supportPage.contactText")}</p>
        </div>
        <a
          href={`mailto:${site.email}?subject=Weightly%20Support`}
          className="inline-flex flex-none items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
          {t("supportPage.emailButton")}
        </a>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{t("supportPage.tipsTitle")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {tips.map((tip) => (
            <article key={tip.q} className="card p-6">
              <h3 className="font-semibold">{tip.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">{tip.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{t("faq.title")}</h2>
        <div className="mt-6 divide-y divide-ink-100 border-y border-ink-100 dark:divide-ink-800 dark:border-ink-800">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                {item.q}
                <span className="text-2xl font-light text-ink-400 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
