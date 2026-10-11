import React, { useState, useEffect } from "react";
import { Maximize2, X, ZoomIn, Sparkles, Smartphone, CheckCircle } from "lucide-react";

export const PhoneSimulator = ({ activeProject }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [activeProject.id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsZoomOpen(false);
    };
    if (isZoomOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomOpen]);

  return (
    <>
      <div className="phone-wrapper" role="region" aria-label="Mobile application showcase">
        <div className="phone-case">
          {/* Dynamic Island / Notch */}
          <div className="phone-notch">
            <span className="notch-speaker"></span>
            <span className="notch-lens"></span>
          </div>

          {/* Screen container */}
          <div className="phone-screen" key={activeProject.id}>
            {/* Status bar */}
            <div className="phone-status-bar">
              <span className="status-time">9:41</span>
              <div className="status-icons">
                <span className="status-bar-icon">📶</span>
                <span className="status-bar-icon">🔋</span>
              </div>
            </div>

            {/* Project Mobile Screenshot / Collage */}
            <div className="phone-screen-media">
              <img
                src={activeProject.image}
                alt={`${activeProject.name} mobile app UI`}
                className={`phone-screenshot-img ${imgLoaded ? "loaded" : "loading"}`}
                onLoad={() => setImgLoaded(true)}
                onClick={() => setIsZoomOpen(true)}
                loading="eager"
              />

              {/* Hover / Tap Overlay for Full Screen Preview */}
              <button
                type="button"
                className="phone-fullscreen-trigger"
                onClick={() => setIsZoomOpen(true)}
                aria-label={`View full resolution screenshot of ${activeProject.name}`}
                title="View full resolution screenshot"
              >
                <Maximize2 size={15} />
                <span>Full View</span>
              </button>

              <div className="phone-scroll-hint">
                <span>Scroll inside to inspect UI</span>
              </div>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="phone-home-indicator"></div>
        </div>

        {/* Caption under phone */}
        <div className="phone-caption">
          <span className="live-dot" style={{ backgroundColor: activeProject.accentColor }}></span>
          <span>
            Production Mobile Interface • <strong>{activeProject.name}</strong>
          </span>
          <button
            type="button"
            className="caption-zoom-btn"
            onClick={() => setIsZoomOpen(true)}
          >
            <ZoomIn size={14} />
            <span>Enlarge Mockup</span>
          </button>
        </div>
      </div>

      {/* High-Resolution Fullscreen Modal / Lightbox */}
      {isZoomOpen && (
        <div
          className="phone-lightbox-backdrop"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} Full Mockup Showcase`}
        >
          <div className="phone-lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-wrap">
                <div
                  className="project-dot-badge"
                  style={{ backgroundColor: activeProject.accentColor }}
                >
                  {activeProject.short}
                </div>
                <div>
                  <h3 className="lightbox-project-name">{activeProject.name}</h3>
                  <span className="lightbox-project-sub">
                    {activeProject.subtitle || activeProject.title} • {activeProject.domain}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setIsZoomOpen(false)}
                aria-label="Close mockup preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lightbox-image-container">
              <img
                src={activeProject.image}
                alt={`${activeProject.name} full mobile UI showcase`}
                className="lightbox-full-img"
              />
            </div>

            {activeProject.achievement && (
              <div className="lightbox-footer">
                <Sparkles size={16} className="text-amber" />
                <p>
                  <strong>Key Achievement:</strong> {activeProject.achievement}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
