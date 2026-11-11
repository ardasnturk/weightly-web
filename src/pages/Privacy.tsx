import { useTranslation } from "react-i18next";
import LegalPage from "../components/LegalPage";

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <LegalPage
      eyebrow={t("privacyPage.eyebrow")}
      title={t("privacyPage.title")}
      updated={t("privacyPage.updated")}
      intro={t("privacyPage.intro")}
      sections={t("privacyPage.sections", { returnObjects: true }) as { h: string; p: string | string[] }[]}
      tocLabel={t("legal.toc")}
    />
  );
}
