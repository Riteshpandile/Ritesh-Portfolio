import React, { useState, useEffect } from "react";
import { SKILLS_DATA } from "../../data/skillsData";
import { ContinuousCarousel } from "../common/ContinuousCarousel";
import { ShowcaseCard } from "../common/ShowcaseCard";
import {
  Smartphone,
  Layers,
  Cloud,
  Rocket,
  Wrench,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Code2,
  Cpu,
  Sparkles,
  Zap
} from "lucide-react";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCategory(null);
    };
    if (selectedCategory) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCategory]);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone size={22} />;
      case "Layers":
        return <Layers size={22} />;
      case "Cloud":
        return <Cloud size={22} />;
      case "Rocket":
        return <Rocket size={22} />;
      default:
        return <Wrench size={22} />;
    }
  };

  const filterCategories = [
    { id: "all", label: "All Skills" },
    { id: "mobile", label: "Mobile & Dart" },
    { id: "architecture", label: "State & Architecture" },
    { id: "backend", label: "Backend & Firebase" },
    { id: "tools", label: "Tools & Store Delivery" }
  ];

  const filteredData =
    activeCategory === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((c) =>
          c.id ? c.id === activeCategory : c.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  // Modal navigation across categories
  const currentCategoryIdx = selectedCategory
    ? SKILLS_DATA.findIndex((c) => c.category === selectedCategory.category)
    : -1;

  const handlePrevInModal = () => {
    if (currentCategoryIdx > 0) {
      setSelectedCategory(SKILLS_DATA[currentCategoryIdx - 1]);
    } else {
      setSelectedCategory(SKILLS_DATA[SKILLS_DATA.length - 1]);
    }
  };

  const handleNextInModal = () => {
    if (currentCategoryIdx < SKILLS_DATA.length - 1) {
      setSelectedCategory(SKILLS_DATA[currentCategoryIdx + 1]);
    } else {
      setSelectedCategory(SKILLS_DATA[0]);
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="section-title">Tools I build with.</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Battle-tested frameworks, state management patterns, and toolchains leveraged across Android and iOS production builds. Scroll through each competency and tap <strong>View Full Details</strong> for production toolchains.
          </p>
        </div>

        {/* Reusable Continuous Carousel for Skills & Tools */}
        <ContinuousCarousel
          items={filteredData}
          filterCategories={filterCategories}
          activeFilter={activeCategory}
          onFilterChange={setActiveCategory}
          getAccentColor={(item) => item.color}
          autoPlayInterval={3500}
          isPausedExternal={!!selectedCategory}
          statusLabel="Auto-play"
          pausedLabel="Paused"
          renderItem={(category) => (
            <ShowcaseCard
              className="compact-skill-card"
              accentColor={category.color}
              icon={getCategoryIcon(category.icon)}
              domain={category.domain || "Tools & Toolchain"}
              title={category.category}
              subtitle={category.description}
              specs={category.highlights}
              tags={category.skills}
              maxVisibleTags={6}
              actionLabel="View Full Competencies & Toolchain"
              onAction={() => setSelectedCategory(category)}
            />
          )}
        />
      </div>

      {/* ======================================================================
          SKILLS / TOOLCHAIN DETAILS POPUP MODAL
          ====================================================================== */}
      {selectedCategory && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedCategory(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCategory.category} Competencies Details`}
        >
          <div
            className="project-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ "--modal-accent": selectedCategory.color }}
          >
            {/* Modal Header */}
            <div className="modal-header-strip">
              <div className="modal-identity-group">
                <div
                  className="modal-icon-badge"
                  style={{
                    backgroundColor: `${selectedCategory.color}22`,
                    color: selectedCategory.color,
                    borderColor: `${selectedCategory.color}55`
                  }}
                >
                  {getCategoryIcon(selectedCategory.icon)}
                </div>
                <div>
                  <div className="modal-title-row">
                    <h3 className="modal-title">{selectedCategory.category}</h3>
                    <span
                      className="modal-domain-tag"
                      style={{
                        color: selectedCategory.color,
                        borderColor: `${selectedCategory.color}44`
                      }}
                    >
                      {selectedCategory.domain || "Tech Stack"}
                    </span>
                  </div>
                  <span className="modal-role-label">{selectedCategory.description}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedCategory(null)}
                aria-label="Close details"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-scrollable-body">
              {/* Production Impact Callout */}
              <div
                className="modal-achievement-banner"
                style={{
                  borderLeftColor: selectedCategory.color,
                  backgroundColor: `${selectedCategory.color}12`,
                  borderColor: `${selectedCategory.color}35`
                }}
              >
                <div
                  className="modal-achievement-title"
                  style={{ color: selectedCategory.color }}
                >
                  <Sparkles size={18} className="achievement-icon" />
                  <span>Production Impact & Engineering Standard</span>
                </div>
                <p className="modal-achievement-text">{selectedCategory.impact}</p>
              </div>

              {/* Architecture & Engineering Highlights */}
              {selectedCategory.highlights && selectedCategory.highlights.length > 0 && (
                <div className="modal-section-block">
                  <h4 className="modal-section-title">
                    <Layers size={16} />
                    <span>Specialization & Architecture Metrics</span>
                  </h4>
                  <div className="modal-highlights-grid">
                    {selectedCategory.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="modal-hl-card">
                        <small className="hl-card-label">{h.label}</small>
                        <strong className="hl-card-val">{h.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Skills & Proficiency Breakdown */}
              <div className="modal-section-block">
                <h4 className="modal-section-title">
                  <Code2 size={16} />
                  <span>Competencies & Proficiency Breakdown</span>
                </h4>
                <div className="skills-detailed-grid">
                  {selectedCategory.skills.map((skill, sIdx) => {
                    const isExpert = skill.level === "Expert";
                    const isAdvanced = skill.level === "Advanced";
                    return (
                      <div
                        key={sIdx}
                        className={`skill-detail-card ${skill.highlight ? "highlighted" : ""}`}
                        style={{
                          "--skill-accent": selectedCategory.color,
                          borderColor: skill.highlight ? `${selectedCategory.color}55` : undefined
                        }}
                      >
                        <div className="skill-detail-top">
                          <span
                            className="skill-detail-dot"
                            style={{
                              backgroundColor: selectedCategory.color,
                              boxShadow: `0 0 8px ${selectedCategory.color}`
                            }}
                          />
                          <span className="skill-detail-name">{skill.name}</span>
                        </div>
                        <span
                          className={`skill-detail-level-badge level-${skill.level.toLowerCase()}`}
                          style={
                            isExpert
                              ? {
                                  backgroundColor: "rgba(16, 185, 129, 0.12)",
                                  color: "#10B981",
                                  borderColor: "rgba(16, 185, 129, 0.35)"
                                }
                              : isAdvanced
                              ? {
                                  backgroundColor: `${selectedCategory.color}16`,
                                  color: selectedCategory.color,
                                  borderColor: `${selectedCategory.color}44`
                                }
                              : undefined
                          }
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer with Category Navigation */}
            <div className="modal-footer-bar">
              <div className="modal-nav-arrows">
                <button
                  type="button"
                  className="modal-nav-project-btn"
                  onClick={handlePrevInModal}
                  title="View previous category"
                >
                  <ChevronLeft size={16} />
                  <span>Previous Toolchain</span>
                </button>
                <button
                  type="button"
                  className="modal-nav-project-btn"
                  onClick={handleNextInModal}
                  title="View next category"
                >
                  <span>Next Toolchain</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedCategory(null)}
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
