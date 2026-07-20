import { SKILL_GROUPS } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

const GROUP_STYLES = {
  proficient: { color: "#7cffd4", number: "01", hint: "Build independently" },
  "working-knowledge": { color: "#7cb8ff", number: "02", hint: "Used in projects" },
  exploring: { color: "#b57bff", number: "03", hint: "Currently learning" },
} as const;

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7cffd4", letterSpacing: "0.25em", marginBottom: "1rem" }}>
            {t("skills.eyebrow")}
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#f0efff", lineHeight: 1.1 }}>
            {t("skills.title")}
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", color: "#8888b8", maxWidth: "550px", margin: "1rem auto 0", lineHeight: 1.7 }}>
            {t("skills.subtitle")}
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(124,255,212,0.035), rgba(181,123,255,0.035))",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "22px",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {SKILL_GROUPS.map((group, index) => {
            const groupStyle = GROUP_STYLES[group.level];

            return (
              <article
                key={group.level}
                className="grid md:grid-cols-[240px_1fr] gap-5 md:gap-10 items-center px-6 py-7 md:px-8 md:py-8 transition-colors hover:bg-white/[0.02]"
                style={{ borderTop: index === 0 ? "none" : "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: groupStyle.color,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      paddingTop: "0.25rem",
                      opacity: 0.75,
                    }}
                  >
                    {groupStyle.number}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.08rem", fontWeight: 700, color: "#f0efff", marginBottom: "0.3rem" }}>
                      {t(`skills.${group.level}`)}
                    </h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: "#8888b8" }}>
                      {t(`skills.hint.${group.level}`)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 md:justify-end">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.72rem",
                        color: groupStyle.color,
                        border: `1px solid ${groupStyle.color}30`,
                        background: `${groupStyle.color}0d`,
                        padding: "0.4rem 0.85rem",
                        borderRadius: "999px",
                        boxShadow: `inset 0 0 12px ${groupStyle.color}08`,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
