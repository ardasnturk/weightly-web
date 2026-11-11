import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import icon from "../assets/icon.png";
import LanguageSelect from "./LanguageSelect";
import { site } from "../site";

/** Floating glass pill that tightens once the page scrolls. */
export default function Navigation() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { to: "/#new", label: t("nav.new") },
    { to: "/#features", label: t("nav.features") },
    { to: "/#pro", label: t("nav.pro") },
    { to: "/privacy", label: t("nav.privacy") },
    { to: "/support", label: t("nav.support") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto w-full max-w-6xl rounded-[1.6rem] transition-all duration-500 ${
          scrolled || open ? "glass" : "border border-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-3 pr-2 sm:h-16 sm:pl-4">
          <Link to="/" className="group flex items-center gap-2.5 font-semibold">
            <img src={icon} alt="" className="h-9 w-9 rounded-[10px] shadow-md transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105" width={36} height={36} />
            <span className="text-lg tracking-tight">Weightly</span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-forest-900/70 transition hover:bg-forest-900/[0.06] hover:text-forest-900 dark:text-cream-100/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSelect />
            <a
              href={site.appStore}
              className="ml-2 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:-translate-y-0.5 hover:bg-brand-700 dark:bg-cream-100 dark:text-forest-950 dark:hover:bg-brand-200"
            >
              {t("nav.download")}
            </a>
          </div>

          <button
            type="button"
            className="rounded-full p-2.5 transition hover:bg-forest-900/[0.06] md:hidden dark:hover:bg-white/10"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-3 pb-4">
                {links.map((link, index) => (
                  <motion.div key={link.to} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.04 * index }}>
                    <Link to={link.to} className="block rounded-2xl px-3 py-3 text-lg font-medium hover:bg-forest-900/[0.06] dark:hover:bg-white/10">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-2 flex items-center justify-between px-1">
                  <LanguageSelect />
                  <a href={site.appStore} className="rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream-50 dark:bg-cream-100 dark:text-forest-950">
                    {t("nav.download")}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
