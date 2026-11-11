import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { languages } from "../i18n";

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? "en";
  return (
    <label className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-forest-900/70 transition hover:bg-forest-900/[0.06] dark:text-cream-100/70 dark:hover:bg-white/10">
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">{t("nav.language")}</span>
      <select
        value={current}
        onChange={(event) => i18n.changeLanguage(event.target.value)}
        className="cursor-pointer appearance-none bg-transparent pr-1 font-medium focus:outline-none dark:[color-scheme:dark]"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </label>
  );
}
