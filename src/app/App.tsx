import { Footer } from "./components/layout/Footer";
import { LiquidBackground } from "./components/layout/LiquidBackground";
import { Navbar } from "./components/layout/Navbar";
import { PageLayout } from "./components/layout/PageLayout";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <PageLayout>
        <LiquidBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </PageLayout>
    </LanguageProvider>
  );
}
