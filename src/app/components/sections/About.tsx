import profileImage from "../../../profile-photo-red.jpeg";
import { useLanguage } from "../../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <div className="relative flex justify-center md:justify-start">
            <div
              style={{
                width: "min(340px, 85vw)",
                aspectRatio: "4/5",
                borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
                overflow: "hidden",
                border: "1px solid rgba(124,255,212,0.2)",
                background: "rgba(255,255,255,0.03)",
                position: "relative",
              }}
            >
              <img
                src={profileImage}
                alt="Göksun Gökmen"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8)" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(4,4,15,0.5) 100%)"
              }} />
            </div>
            <div
              style={{
                position: "absolute", bottom: "2rem", right: "0",
                background: "rgba(181,123,255,0.15)",
                border: "1px solid rgba(181,123,255,0.3)",
                borderRadius: "12px",
                padding: "0.75rem 1.2rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#b57bff",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{t("about.year")}</div>
            </div>
          </div>

          <div>
            <p
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7cffd4", letterSpacing: "0.25em", marginBottom: "1.25rem" }}
            >
              {t("about.eyebrow")}
            </p>
            <h2
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, color: "#f0efff", marginBottom: "1.5rem" }}
            >
              {t("about.title")} 
              <br />
              <span style={{ color: "#b57bff" }}>{t("about.titleAccent")}</span>
            </h2>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#8888b8", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")} {t("about.welcome")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["📍", t("about.location")],
                ["🎓", t("about.university")],
                ["🔭", t("about.role")],
                ["📬", t("about.collab")],
              ].map(([icon, val]) => (
                <div key={val}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "0.7rem 1rem",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    color: "#8888b8",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>{icon}</span> {val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
