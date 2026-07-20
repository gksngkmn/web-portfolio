import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div style={{ background: "#04040f", minHeight: "100vh", color: "#f0efff", overflowX: "hidden" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(124,255,212,0.2); border-radius: 99px; }
        input::placeholder, textarea::placeholder { color: rgba(136,136,184,0.4); }
        input:focus, textarea:focus { border-color: rgba(124,255,212,0.3) !important; }
        :focus-visible { outline: 2px solid #7cffd4; outline-offset: 3px; }
        .group:hover img { opacity: 0.75; transform: scale(1.05); }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
