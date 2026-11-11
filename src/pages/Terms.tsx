import { useTranslation } from "react-i18next";
import LegalPage from "../components/LegalPage";

export default function Terms() {
  const { t } = useTranslation();
  return (
    <LegalPage
      eyebrow={t("termsPage.eyebrow")}
      title={t("termsPage.title")}
      updated={t("termsPage.updated")}
      intro={t("termsPage.intro")}
      sections={t("termsPage.sections", { returnObjects: true }) as { h: string; p: string | string[] }[]}
      tocLabel={t("legal.toc")}
    />
  );
}
