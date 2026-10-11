import React, { useState, useEffect } from "react";
import { PROJECTS_DATA } from "../../data/projectsData";
import { ContinuousCarousel } from "../common/ContinuousCarousel";
import { ShowcaseCard } from "../common/ShowcaseCard";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle,
  FolderGit2,
  Layers,
  Code2
} from "lucide-react";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Keyboard navigation (ESC to close popup)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Filter categories
  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "jobs", label: "Job Portals" },
    { id: "lms", label: "EdTech & LMS" },
    { id: "credaibility", label: "AI Real Estate" },
    { id: "relation-nest", label: "Society Mgmt" },
    { id: "bms", label: "Enterprise BMS" },
    { id: "nri-star", label: "Referrals" }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.id === activeFilter);

  // Navigate next/previous project inside the details popup
  const currentProjectIdx = selectedProject
    ? PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handlePrevInModal = () => {
    if (currentProjectIdx > 0) {
      setSelectedProject(PROJECTS_DATA[currentProjectIdx - 1]);
    } else {
      setSelectedProject(PROJECTS_DATA[PROJECTS_DATA.length - 1]);
    }
  };

  const handleNextInModal = () => {
    if (currentProjectIdx < PROJECTS_DATA.length - 1) {
      setSelectedProject(PROJECTS_DATA[currentProjectIdx + 1]);
    } else {
      setSelectedProject(PROJECTS_DATA[0]);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Project Experience & Achievements</span>
          </div>
          <h2 className="section-title">Apps, multiple domains.</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            1.10 years of end-to-end Flutter development across enterprise, consumer, AI, and business platforms. Scroll through each project's core achievement and tap <strong>View More</strong> for full modules, responsibilities, and architecture.
          </p>
        </div>

        {/* Reusable Continuous Carousel with Zero Deflection */}
        <ContinuousCarousel
          items={filteredProjects}
          filterCategories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          getAccentColor={(item) => item.accentColor}
          autoPlayInterval={3500}
          isPausedExternal={!!selectedProject}
          renderItem={(project) => (
            <ShowcaseCard
              accentColor={project.accentColor}
              shortBadge={project.short}
              domain={project.domain}
              title={project.name}
              subtitle={project.subtitle || project.title}
              highlightBadgeText="Key Engineering Achievement"
              highlightBody={project.achievement}
              specs={project.highlights}
              tags={project.tags}
              maxVisibleTags={4}
              actionLabel="View Full Details & Responsibilities"
              onAction={() => setSelectedProject(project)}
            />
          )}
        />
      </div>

      {/* ======================================================================
          FULL PROJECT DETAILS POPUP / MODAL
          ====================================================================== */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.name} Full Project Details`}
        >
          <div
            className="project-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ "--modal-accent": selectedProject.accentColor }}
          >
            {/* Modal Header */}
            <div className="modal-header-strip">
              <div className="modal-identity-group">
                <div
                  className="modal-icon-badge"
                  style={{ backgroundColor: selectedProject.accentColor }}
                >
                  {selectedProject.short}
                </div>
                <div>
                  <div className="modal-title-row">
                    <h3 className="modal-title">{selectedProject.name}</h3>
                    <span className="modal-domain-tag">
                      {selectedProject.domain}
                    </span>
                  </div>
                  <span className="modal-role-label">
                    {selectedProject.subtitle || selectedProject.title}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="modal-scrollable-body">
              {/* Visual Showcase Banner */}
              <div className="modal-mockup-frame">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.name} high resolution interface showcase`}
                  className="modal-mockup-img"
                />
                <div className="modal-mockup-caption">
                  <span>Production UI Mockup • {selectedProject.name}</span>
                </div>
              </div>

              {/* Key Achievement Banner (Hero Highlight) */}
              {selectedProject.achievement && (
                <div className="modal-achievement-banner">
                  <div className="modal-achievement-title">
                    <Award size={18} className="achievement-icon" />
                    <span>Key Engineering Achievement</span>
                  </div>
                  <p className="modal-achievement-text">
                    {selectedProject.achievement}
                  </p>
                </div>
              )}

              {/* Project Overview */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <FolderGit2 size={16} />
                  <span>Project Overview</span>
                </h4>
                <p className="modal-overview-text">{selectedProject.summary}</p>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Layers size={16} />
                  <span>Architecture & Technical Highlights</span>
                </h4>
                <div className="modal-highlights-grid">
                  {selectedProject.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="modal-hl-card">
                      <small className="hl-card-label">{h.label}</small>
                      <strong className="hl-card-val">{h.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Responsibilities Checklist */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <CheckCircle size={16} />
                  <span>Key Features & Engineering Responsibilities</span>
                </h4>
                <ul className="modal-points-list">
                  {selectedProject.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle
                        size={16}
                        className="point-bullet-icon"
                        style={{ color: selectedProject.accentColor }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Toolchain */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Code2 size={16} />
                  <span>Technologies & Toolchain</span>
                </h4>
                <div className="modal-tech-tags-wrap">
                  {selectedProject.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="modal-tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Project Navigation */}
            <div className="modal-footer-bar">
              <div className="modal-nav-arrows">
                <button
                  type="button"
                  className="modal-nav-project-btn"
                  onClick={handlePrevInModal}
                  title="View previous project"
                >
                  <ChevronLeft size={16} />
                  <span>Previous Project</span>
                </button>
                <button
                  type="button"
                  className="modal-nav-project-btn"
                  onClick={handleNextInModal}
                  title="View next project"
                >
                  <span>Next Project</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
