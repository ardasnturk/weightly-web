import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import icon from "../assets/icon.png";
import { site } from "../site";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60 dark:border-ink-800 dark:bg-ink-900/40">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={icon} alt="" className="h-8 w-8 rounded-[9px]" width={32} height={32} />
            <span className="text-lg font-semibold tracking-tight">Weightly</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-ink-600 dark:text-ink-400">{t("footer.tagline")}</p>
        </div>
        <ul className="grid gap-2 text-sm">
          <li><Link className="hover:text-brand-600" to="/privacy">{t("footer.privacy")}</Link></li>
          <li><Link className="hover:text-brand-600" to="/support">{t("footer.support")}</Link></li>
          <li><a className="hover:text-brand-600" href={site.appleEula}>{t("footer.terms")}</a></li>
          <li><a className="hover:text-brand-600" href={`mailto:${site.email}`}>{site.email}</a></li>
        </ul>
      </div>
      <div className="container-page space-y-1 border-t border-ink-100 py-6 text-xs text-ink-500 dark:border-ink-800">
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <p>{t("footer.wellness")}</p>
        <p>{t("footer.apple")}</p>
      </div>
    </footer>
  );
}
