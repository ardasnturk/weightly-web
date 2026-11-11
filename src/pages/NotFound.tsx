import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <motion.p
        className="font-display text-[9rem] italic leading-none text-brand-600 dark:text-brand-300"
        initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
      >
        404
      </motion.p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{t("notFound.title")}</h1>
      <Link to="/" className="mt-8 rounded-full bg-forest-900 px-6 py-3 font-semibold text-cream-50 dark:bg-cream-100 dark:text-forest-950">
        {t("notFound.back")}
      </Link>
    </div>
  );
}
