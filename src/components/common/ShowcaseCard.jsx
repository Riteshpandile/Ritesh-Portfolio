import React from "react";
import { Award, ArrowRight } from "lucide-react";

/**
 * ShowcaseCard
 * Reusable obsidian glassmorphic card component with dynamic accent lighting,
 * prominent highlight callout, spec pills, tech chips, and animated CTA button.
 */
export const ShowcaseCard = ({
  accentColor = "#2563EB",
  shortBadge = null,
  icon = null,
  domain = "",
  title = "",
  subtitle = "",
  highlightBadgeText = "Key Engineering Achievement",
  highlightBadgeIcon = null,
  highlightBody = "",
  specs = [],
  tags = [],
  maxVisibleTags = 4,
  actionLabel = "View Full Details & Responsibilities",
  onAction = null,
  actionIcon = null,
  children = null,
  className = "",
  style = {}
}) => {
  return (
    <article
      className={`carousel-project-card showcase-card ${className}`}
      style={{
        "--project-accent": accentColor,
        ...style
      }}
    >
      {/* Top Header Row: Icon Badge, Domain Pill & Title */}
      <div className="card-top-row">
        <div className="card-identity-group">
          {shortBadge && (
            <div
              className="card-short-badge"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 4px 16px -2px ${accentColor}66`
              }}
            >
              {shortBadge}
            </div>
          )}

          {icon && !shortBadge && (
            <div
              className="card-short-badge icon-mode"
              style={{
                backgroundColor: `${accentColor}18`,
                color: accentColor,
                borderColor: `${accentColor}44`,
                boxShadow: `0 4px 16px -2px ${accentColor}44`
              }}
            >
              {icon}
            </div>
          )}

          <div>
            {domain && (
              <div className="card-domain-badge">
                <span className="card-domain-dot" style={{ backgroundColor: accentColor }} />
                <span className="card-domain-label">{domain}</span>
              </div>
            )}
            <h3 className="card-project-title">{title}</h3>
          </div>
        </div>
      </div>

      {/* Subtitle / Role Description */}
      {subtitle && <span className="card-project-role">{subtitle}</span>}

      {/* Hero Highlight / Key Achievement Box */}
      {highlightBody && (
        <div className="card-achievement-highlight">
          <div className="achievement-badge-tag">
            {highlightBadgeIcon || <Award size={15} className="achievement-tag-icon" />}
            <span>{highlightBadgeText}</span>
          </div>
          <p className="achievement-body-text">{highlightBody}</p>
        </div>
      )}

      {/* Architecture & Engineering Highlights Pills */}
      {specs && specs.length > 0 && (
        <div className="card-highlights-pills">
          {specs.map((s, sIdx) => (
            <div key={sIdx} className="card-hl-pill">
              <span
                className="card-hl-dot"
                style={{ backgroundColor: s.color || accentColor }}
              />
              <span className="card-hl-label">{s.label}:</span>
              <span className="card-hl-value">{s.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack Chips / Skills List */}
      {tags && tags.length > 0 && (
        <div className="card-tech-preview">
          {tags.slice(0, maxVisibleTags).map((tag, tIdx) => {
            const isObject = typeof tag === "object" && tag !== null;
            const tagName = isObject ? tag.name : tag;
            const tagLevel = isObject ? tag.level : null;
            const isHighlighted = isObject && tag.highlight;

            return (
              <span
                key={tIdx}
                className={`mini-tech-chip ${isHighlighted ? "highlighted-tag" : ""}`}
                style={
                  isHighlighted
                    ? {
                        borderColor: accentColor,
                        backgroundColor: `${accentColor}15`,
                        color: accentColor
                      }
                    : undefined
                }
              >
                {tagName}
                {tagLevel && <small className="chip-level-badge"> • {tagLevel}</small>}
              </span>
            );
          })}
          {tags.length > maxVisibleTags && (
            <span
              className="mini-tech-chip more-tag"
              style={{
                color: accentColor,
                borderColor: `${accentColor}66`
              }}
            >
              +{tags.length - maxVisibleTags} more
            </span>
          )}
        </div>
      )}

      {/* Optional custom children */}
      {children}

      {/* Action CTA Button */}
      {onAction && (
        <button
          type="button"
          className="card-view-more-btn"
          onClick={onAction}
          aria-label={`View full details of ${title}`}
        >
          <span>{actionLabel}</span>
          {actionIcon || <ArrowRight size={16} className="view-more-arrow" />}
        </button>
      )}
    </article>
  );
};
