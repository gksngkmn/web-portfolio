import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ContactMessage } from "../../models/ContactMessage";
import { ContactService } from "../../services/ContactService";
import { useLanguage } from "../../i18n/LanguageContext";

const CONTACT_EMAIL = "gksngkmn020@gmail.com";
const contactService = new ContactService(CONTACT_EMAIL);

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      await contactService.send(new ContactMessage(form));
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError(t("contact.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#7cffd4", letterSpacing: "0.25em", marginBottom: "1rem" }}>
            {t("contact.eyebrow")}
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#f0efff", lineHeight: 1.1, marginBottom: "1rem" }}>
            {t("contact.title")}
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", color: "#8888b8", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            {[
              { icon: <Mail size={18} />, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, color: "#7cffd4" },
              { icon: <Github size={18} />, label: "github.com/gksngkmn", href: "https://github.com/gksngkmn", color: "#b57bff" },
              { icon: <Linkedin size={18} />, label: "linkedin.com/in/goksungokmen", href: "https://linkedin.com/in/goksungokmen", color: "#7cb8ff" },
            ].map((s) => (
              <a key={s.label} href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#8888b8",
                  textDecoration: "none",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}40`;
                  (e.currentTarget as HTMLAnchorElement).style.color = s.color;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#8888b8";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ color: s.color }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>

          {sent ? (
            <div role="status" aria-live="polite" style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(124,255,212,0.2)", borderRadius: "20px",
              background: "rgba(124,255,212,0.04)", textAlign: "center", padding: "3rem",
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#f0efff", marginBottom: "0.5rem" }}>{t("contact.sentTitle")}</p>
              <p style={{ fontFamily: "'Outfit', sans-serif", color: "#8888b8", fontSize: "0.9rem" }}>{t("contact.sentText")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {(["name", "email"] as const).map((f) => (
                <div key={f}>
                  <label htmlFor={`contact-${f}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#7cffd4", letterSpacing: "0.2em", display: "block", marginBottom: "0.5rem" }}>
                    {t(`contact.${f}`)}
                  </label>
                  <input
                    id={`contact-${f}`}
                    name={f}
                    type={f === "email" ? "email" : "text"}
                    required
                    placeholder={t(f === "name" ? "contact.namePlaceholder" : "contact.emailPlaceholder")}
                    value={form[f]}
                    onChange={(e) => setForm((prev) => ({ ...prev, [f]: e.target.value }))}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px", padding: "0.75rem 1rem", color: "#f0efff",
                      fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", outline: "none",
                    }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="contact-message" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#7cffd4", letterSpacing: "0.2em", display: "block", marginBottom: "0.5rem" }}>
                  {t("contact.message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4} required
                  placeholder={t("contact.messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px", padding: "0.75rem 1rem", color: "#f0efff",
                    fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", outline: "none", resize: "none",
                  }}
                />
              </div>
              {error && (
                <p role="alert" style={{ fontFamily: "'Outfit', sans-serif", color: "#ff9f7c", fontSize: "0.85rem" }}>
                  {error} {t("contact.direct")} <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#7cffd4" }}>{CONTACT_EMAIL}</a>.
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                style={{
                  background: "linear-gradient(135deg, #7cffd4, #b57bff)",
                  color: "#04040f", fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                  fontSize: "0.9rem", padding: "0.85rem", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  cursor: sending ? "wait" : "pointer", border: "none", opacity: sending ? 0.7 : 1,
                }}
                className="hover:opacity-90 transition-opacity"
              >
                {sending ? t("contact.sending") : t("contact.send")} {!sending && <ArrowRight size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
