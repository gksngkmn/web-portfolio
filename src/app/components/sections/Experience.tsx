import { ExternalLink } from "lucide-react";
import { EXPERIENCES } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7cffd4", letterSpacing: "0.25em", marginBottom: "1rem" }}>
            {t("experience.eyebrow")}
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#f0efff", lineHeight: 1.1 }}>
            {t("experience.title")}
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden="true" style={{ position: "absolute", left: "0.35rem", top: "0.5rem", bottom: "0.5rem", width: "1px", background: "linear-gradient(#7cffd4, #b57bff)" }} />
          {EXPERIENCES.map((experience, experienceIndex) => (
            <article key={`${experience.company}-${experience.startDate}`} className="relative pl-10">
              <div aria-hidden="true" style={{ position: "absolute", left: 0, top: "0.35rem", width: "0.75rem", height: "0.75rem", borderRadius: "50%", background: "#7cffd4", boxShadow: "0 0 18px rgba(124,255,212,0.55)" }} />
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "clamp(1.4rem, 4vw, 2rem)" }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7cffd4", fontSize: "0.68rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      {t(`experience.date.${experienceIndex}`)}
                    </p>
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", color: "#f0efff", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.35rem" }}>
                      {t(`experience.role.${experienceIndex}`)}
                    </h3>
                    <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Outfit', sans-serif", color: "#b57bff", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                      {experience.company} <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.4rem", paddingLeft: "1.1rem", listStyle: "disc" }}>
                  {experience.responsibilities.map((responsibility, responsibilityIndex) => (
                    <li key={responsibility} style={{ fontFamily: "'Outfit', sans-serif", color: "#8888b8", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      {t(`experience.responsibility.${experienceIndex}.${responsibilityIndex}`)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.66rem", color: "#7cb8ff", border: "1px solid rgba(124,184,255,0.25)", background: "rgba(124,184,255,0.06)", padding: "0.25rem 0.65rem", borderRadius: "999px" }}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
