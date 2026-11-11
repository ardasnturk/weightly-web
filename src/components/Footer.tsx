import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import icon from "../assets/icon.png";
import { site } from "../site";
import AppStoreButton from "./AppStoreButton";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-100">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={icon} alt="" className="h-11 w-11 rounded-[12px]" width={44} height={44} />
            <span className="text-2xl font-semibold tracking-tight">Weightly</span>
          </div>
          <p className="mt-4 max-w-sm text-cream-100/70">{t("footer.tagline")}</p>
          <AppStoreButton className="mt-6" inverted />
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/50">{t("footer.app")}</h2>
          <ul className="mt-4 grid gap-2.5 text-cream-100/80">
            <li><Link className="transition hover:text-brand-300" to="/#new">{t("nav.new")}</Link></li>
            <li><Link className="transition hover:text-brand-300" to="/#features">{t("nav.features")}</Link></li>
            <li><Link className="transition hover:text-brand-300" to="/#pro">{t("nav.pro")}</Link></li>
            <li><a className="transition hover:text-brand-300" href={site.atleva}>Atleva</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/50">{t("footer.help")}</h2>
          <ul className="mt-4 grid gap-2.5 text-cream-100/80">
            <li><Link className="transition hover:text-brand-300" to="/support">{t("footer.support")}</Link></li>
            <li><Link className="transition hover:text-brand-300" to="/privacy">{t("footer.privacy")}</Link></li>
            <li><Link className="transition hover:text-brand-300" to="/terms">{t("footer.terms")}</Link></li>
            <li><a className="transition hover:text-brand-300" href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container-page relative space-y-1 border-t border-white/10 py-6 text-xs text-cream-100/50">
        <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        <p>{t("footer.wellness")}</p>
        <p>{t("footer.apple")}</p>
      </div>
    </footer>
  );
}
