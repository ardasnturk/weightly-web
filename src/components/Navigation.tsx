import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import icon from "../assets/icon.png";
import LanguageSelect from "./LanguageSelect";
import { site } from "../site";

export default function Navigation() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/#features", label: t("nav.features") },
    { to: "/#pro", label: t("nav.pro") },
    { to: "/privacy", label: t("nav.privacy") },
    { to: "/support", label: t("nav.support") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-white/75 backdrop-blur-xl dark:border-ink-800/80 dark:bg-ink-950/75">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <img src={icon} alt="" className="h-8 w-8 rounded-[9px]" width={32} height={32} />
          <span className="text-lg tracking-tight">Weightly</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white"
            >
              {link.label}
            </NavLink>
          ))}
          <LanguageSelect />
          <a
            href={site.appStore}
            className="ml-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t("nav.download")}
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-ink-700 hover:bg-ink-100 md:hidden dark:text-ink-200 dark:hover:bg-ink-800"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={t("nav.menu")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 pb-4 pt-2 md:hidden dark:border-ink-800 dark:bg-ink-950">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-ink-100 dark:hover:bg-ink-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between px-1">
            <LanguageSelect />
            <a href={site.appStore} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
              {t("nav.download")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
