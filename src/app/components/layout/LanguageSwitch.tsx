import { useLanguage } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/Language";

const LANGUAGES: Language[] = ["tr", "en"];

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div aria-label={t("language.selection")} role="group" className="inline-flex items-center rounded-full p-1" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
      {LANGUAGES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.08em",
            color: language === option ? "#04040f" : "#8888b8",
            background: language === option ? "#7cffd4" : "transparent",
            borderRadius: "999px",
            padding: "0.28rem 0.5rem",
            transition: "all 0.2s ease",
          }}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
