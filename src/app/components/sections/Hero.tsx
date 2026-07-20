import { ArrowRight, ChevronDown } from "lucide-react";
import { useMemo } from "react";
import { useTyping } from "../../hooks/useTyping";
import { useLanguage } from "../../i18n/LanguageContext";

export function Hero() {
  const { language, t } = useLanguage();
  const typingStrings = useMemo(() => [t("hero.typing.web"), t("hero.typing.robotics"), t("hero.typing.student")], [language, t]);
  const { text, blink } = useTyping(typingStrings, 78, 2300);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16" style={{ zIndex: 1 }}>
      <div
        className="mb-10 inline-flex items-center gap-2 px-4 py-1.5"
        style={{
          border: "1px solid rgba(124,255,212,0.25)",
          borderRadius: "999px",
          background: "rgba(124,255,212,0.06)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#7cffd4",
          letterSpacing: "0.15em",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#7cffd4] animate-pulse" />
        {t("hero.status")}
      </div>

      <h1
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(3rem, 10vw, 7.5rem)",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
          color: "#f0efff",
          marginBottom: "1.5rem",
        }}
      >
        Göksun
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #7cffd4 0%, #7cb8ff 50%, #b57bff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Gökmen.
        </span>
      </h1>

      <div
        aria-hidden="true"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "clamp(1rem, 3vw, 1.5rem)",
          color: "#8888b8",
          fontStyle: "italic",
          marginBottom: "2rem",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.35rem",
        }}
      >
        {text}
        <span style={{ opacity: blink ? 1 : 0, color: "#7cffd4", fontStyle: "normal", transition: "opacity 0.1s" }}>|</span>
      </div>
      <span className="sr-only">{typingStrings.join(" ")}</span>

      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.05rem",
          color: "#8888b8",
          maxWidth: "480px",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
        }}
      >
        {t("hero.summary")}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            background: "linear-gradient(135deg, #7cffd4, #7cb8ff)",
            color: "#04040f",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
          }}
          className="hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          {t("hero.projects")} <ArrowRight size={16} />
        </button>
        <a
          href="https://github.com/gksngkmn"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: "0.9rem",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f0efff",
            padding: "0.75rem 2rem",
            borderRadius: "999px",
          }}
          className="hover:border-white/30 transition-colors"
        >
          GitHub
        </a>
      </div>

      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#8888b8" }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em" }}>{t("hero.scroll")}</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
