import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  const sections = t("privacyPage.sections", { returnObjects: true }) as { h: string; p: string }[];
  return (
    <article className="container-page max-w-3xl py-16 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("privacyPage.title")}</h1>
      <p className="mt-3 text-sm text-ink-500">{t("privacyPage.updated")}</p>
      <p className="lead mt-8">{t("privacyPage.intro")}</p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.h}>
            <h2 className="text-xl font-semibold">{section.h}</h2>
            <p className="mt-2 leading-relaxed text-ink-700 dark:text-ink-200">{section.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
