import { ExternalLink, Github } from "lucide-react";
import type { PortfolioProject } from "../../models/PortfolioProject";
import { useLanguage } from "../../i18n/LanguageContext";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const { t } = useLanguage();
  const title = t(`projects.item.${project.id}.title`);
  const description = t(`projects.item.${project.id}.description`);
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      className="group hover:scale-[1.02]"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}40`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${project.color}12`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ height: "180px", overflow: "hidden", position: "relative", background: "#111" }}>
        <img
          src={project.image}
          alt={title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.55,
            transition: "opacity 0.4s, transform 0.5s",
          }}
          className="group-hover:opacity-75 group-hover:scale-105"
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 30%, rgba(4,4,15,0.7) 100%)` }} />
      </div>

      <div style={{ padding: "1.4rem" }}>
        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#f0efff", marginBottom: "0.6rem" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.83rem", color: "#8888b8", lineHeight: 1.65, marginBottom: "1rem" }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: project.color,
                border: `1px solid ${project.color}30`,
                background: `${project.color}0d`,
                padding: "0.2rem 0.6rem",
                borderRadius: "999px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={project.github} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8888b8", display: "flex", alignItems: "center", gap: "0.35rem" }} className="hover:text-foreground transition-colors">
            <Github size={12} /> GitHub
          </a>
          {project.hasLiveDemo && (
            <a href={project.live!} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#8888b8", display: "flex", alignItems: "center", gap: "0.35rem" }} className="hover:text-foreground transition-colors">
              <ExternalLink size={12} /> {t("projects.live")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
