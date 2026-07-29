import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import type { PortfolioProject } from "../../models/PortfolioProject";
import { useLanguage } from "../../i18n/LanguageContext";

interface ProjectDetailModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const title = t(`projects.item.${project.id}.title`);
  const description = t(`projects.item.${project.id}.details`);
  const features = [1, 2, 3].map((index) => t(`projects.item.${project.id}.feature.${index}`));
  const hasMultipleImages = project.gallery.length > 1;

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + project.gallery.length) % project.gallery.length);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % project.gallery.length);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) setIsLightboxOpen(false);
        else onClose();
      }
      if (isLightboxOpen && event.key === "ArrowLeft" && hasMultipleImages) showPreviousImage();
      if (isLightboxOpen && event.key === "ArrowRight" && hasMultipleImages) showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, isLightboxOpen, onClose, project.gallery.length]);

  return (
    <div className="project-modal-backdrop" onMouseDown={onClose}>
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        onMouseDown={(event) => event.stopPropagation()}
        style={{ "--project-color": project.color } as React.CSSProperties}
      >
        <button ref={closeButtonRef} type="button" className="project-modal-close" onClick={onClose} aria-label={t("projects.closeDetails")}>
          <X size={20} />
        </button>

        <div className="project-modal-header">
          <div className="project-modal-header-glow" />
          <div className="project-modal-visual-copy">
            <span>{t("projects.caseStudy")}</span>
            <h2 id={`project-modal-title-${project.id}`}>{title}</h2>
          </div>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-main">
            <p className="project-modal-kicker">{t("projects.overview")}</p>
            <p className="project-modal-description">{description}</p>

            <p className="project-modal-kicker project-modal-features-title">{t("projects.features")}</p>
            <div className="project-modal-features">
              {features.map((feature, index) => (
                <div className="project-modal-feature" key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="project-modal-sidebar">
            <p className="project-modal-kicker">{t("projects.technologies")}</p>
            <div className="project-modal-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            <div className="project-modal-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ExternalLink size={14} />
              </a>
              {project.hasLiveDemo && (
                <a href={project.live!} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} /> {t("projects.live")}
                </a>
              )}
            </div>
          </aside>
        </div>

        {project.gallery.length > 0 && (
          <section className="project-modal-gallery-section" aria-labelledby={`project-gallery-title-${project.id}`}>
            <div className="project-modal-gallery-heading">
              <p className="project-modal-kicker" id={`project-gallery-title-${project.id}`}>{t("projects.gallery")}</p>
              <span>{t("projects.openImage")}</span>
            </div>
            <div className={`project-modal-thumbnails ${project.gallery.length === 1 ? "is-single" : ""}`}>
              {project.gallery.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => {
                    setActiveImage(index);
                    setIsLightboxOpen(true);
                  }}
                  aria-label={`${title} — ${t("projects.openImage")} ${index + 1}`}
                >
                  <img src={image} alt={`${title} — ${t("projects.image")} ${index + 1}`} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {isLightboxOpen && (
          <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={t("projects.gallery")} onMouseDown={() => setIsLightboxOpen(false)}>
            <button type="button" className="project-lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label={t("projects.closeImage")}>
              <X size={21} />
            </button>
            <div className="project-lightbox-content" onMouseDown={(event) => event.stopPropagation()}>
              <img src={project.gallery[activeImage]} alt={`${title} — ${t("projects.image")} ${activeImage + 1}`} />
              {hasMultipleImages && (
                <>
                  <button type="button" className="project-gallery-arrow project-gallery-arrow-left" onClick={showPreviousImage} aria-label={t("projects.previousImage")}>
                    <ChevronLeft size={23} />
                  </button>
                  <button type="button" className="project-gallery-arrow project-gallery-arrow-right" onClick={showNextImage} aria-label={t("projects.nextImage")}>
                    <ChevronRight size={23} />
                  </button>
                </>
              )}
              <span className="project-lightbox-count">{activeImage + 1} / {project.gallery.length}</span>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
