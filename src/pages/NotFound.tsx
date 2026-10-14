import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-bold">{t("notFound.title")}</h1>
      <Link to="/" className="mt-6 font-semibold text-brand-600 hover:underline">{t("notFound.back")}</Link>
    </div>
  );
}
