import { useState } from "react";
import { PORTFOLIO_CATALOG, PROJECT_CATEGORIES } from "../../data/portfolioData";
import type { ProjectFilterId } from "../../models/ProjectCategory";
import { ProjectCard } from "../portfolio/ProjectCard";
import { ProjectDetailModal } from "../portfolio/ProjectDetailModal";
import { useLanguage } from "../../i18n/LanguageContext";
import type { PortfolioProject } from "../../models/PortfolioProject";

export function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState<ProjectFilterId>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const filtered = PORTFOLIO_CATALOG.filterByCategory(active);

  return (
    <section id="projects" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7cffd4", letterSpacing: "0.25em", marginBottom: "1rem" }}>
            {t("projects.eyebrow")}
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#f0efff", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            {t("projects.title")}
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", color: "#8888b8", fontSize: "1rem" }}>
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={active === c.id}
              onClick={() => setActive(c.id)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1.1rem",
                borderRadius: "999px",
                border: active === c.id ? "1px solid rgba(124,255,212,0.4)" : "1px solid rgba(255,255,255,0.08)",
                background: active === c.id ? "rgba(124,255,212,0.1)" : "rgba(255,255,255,0.03)",
                color: active === c.id ? "#7cffd4" : "#8888b8",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              {c.icon} {t(`projects.filter.${c.id}`)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-live="polite">
          {filtered.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />)}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
