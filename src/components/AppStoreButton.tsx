import { useTranslation } from "react-i18next";
import { site } from "../site";

/** Black "Download on the App Store" button (Apple logo drawn as SVG so it renders on every OS). */
export default function AppStoreButton({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  const { t } = useTranslation();
  const colors = inverted
    ? "bg-cream-50 text-forest-950 hover:bg-white"
    : "bg-forest-950 text-cream-50 hover:bg-forest-800 dark:bg-cream-50 dark:text-forest-950 dark:hover:bg-white";
  return (
    <a
      href={site.appStore}
      className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 shadow-lg shadow-forest-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${colors} ${className}`}
      aria-label={`${t("appStore.small")} ${t("appStore.large")}`}
    >
      <svg viewBox="0 0 384 512" className="h-7 w-7 fill-current transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[11px] font-medium opacity-75">{t("appStore.small")}</span>
        <span className="mt-1 text-xl font-semibold tracking-tight">{t("appStore.large")}</span>
      </span>
    </a>
  );
}
