import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem 1.5rem", position: "relative", zIndex: 1 }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8888b8" }}>
          {t("footer.built")}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8888b8" }}>
          {t("footer.location")}
        </span>
      </div>
    </footer>
  );
}
