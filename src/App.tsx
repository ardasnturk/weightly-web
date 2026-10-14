import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import "./i18n";

/** Scrolls to #anchors after navigation and to the top on page changes. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

/** Keeps the document title and description in the current language. */
function Meta() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pathname.startsWith("/privacy")
      ? t("privacyPage.title")
      : pathname.startsWith("/support")
        ? t("supportPage.title")
        : null;
    document.title = page ? `${page} – Weightly` : t("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  }, [t, i18n.resolvedLanguage, pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Meta />
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Navigate to="/#features" replace />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
