import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/portfolioData";
import { useLanguage } from "../../i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(4,4,15,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "#7cffd4", letterSpacing: "0.2em" }}
          className="cursor-default select-none"
        >
          &lt;GG /&gt;
        </span>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.875rem", color: "#8888b8", letterSpacing: "0.05em" }}
              className="hover:text-foreground transition-colors duration-200"
            >
              {t(item.translationKey)}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.8rem",
              background: "linear-gradient(135deg, #7cffd4, #b57bff)",
              color: "#04040f",
              padding: "0.45rem 1.2rem",
              fontWeight: 600,
              borderRadius: "999px",
              letterSpacing: "0.05em",
            }}
            className="hover:opacity-90 transition-opacity"
          >
            {t("nav.sayHi")}
          </button>
          <LanguageSwitch />
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          aria-label={open ? t("nav.close") : t("nav.open")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" style={{ background: "rgba(4,4,15,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          className="md:hidden px-6 pb-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}
              style={{ fontFamily: "'Outfit', sans-serif", textAlign: "left", color: "#f0efff" }}>
              {t(item.translationKey)}
            </button>
          ))}
          <LanguageSwitch />
        </div>
      )}
    </nav>
  );
}
