import React from "react";
import { DEVELOPER_INFO } from "../../data/developerData";
import { DartCodeCard } from "../showcase/DartCodeCard";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Smartphone } from "lucide-react";
import { TECH_ICONS, ALL_TECH_KEYS } from "../../data/techStackData";

const shiftArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));
const heroRowTop = [...ALL_TECH_KEYS, ...ALL_TECH_KEYS];
const heroRowBottom = [...shiftArray(ALL_TECH_KEYS, 10), ...shiftArray(ALL_TECH_KEYS, 10)];

export const HeroSection = () => {
  return (
    <section className="hero-section" id="top">
      {/* Background drifting tech icons: Top & Bottom only (center removed) */}
      <div className="hero-bg-marquee" aria-hidden="true">
        {/* Top Track */}
        <div className="hero-bg-track hero-track-1">
          <div className="hero-bg-set">
            {heroRowTop.map((k, i) => (
              <span key={`ht-${i}`} className="hero-bg-icon">
                {TECH_ICONS[k]}
              </span>
            ))}
          </div>
          <div className="hero-bg-set" aria-hidden="true">
            {heroRowTop.map((k, i) => (
              <span key={`ht-dup-${i}`} className="hero-bg-icon">
                {TECH_ICONS[k]}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Track */}
        <div className="hero-bg-track hero-track-3">
          <div className="hero-bg-set">
            {heroRowBottom.map((k, i) => (
              <span key={`hb-${i}`} className="hero-bg-icon">
                {TECH_ICONS[k]}
              </span>
            ))}
          </div>
          <div className="hero-bg-set" aria-hidden="true">
            {heroRowBottom.map((k, i) => (
              <span key={`hb-dup-${i}`} className="hero-bg-icon">
                {TECH_ICONS[k]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Bio & Intro */}
        <div className="hero-content">
          <div className="hero-greeting-badge">
            <span className="greeting-pill">Hi 👋</span>
            <span className="greeting-text">I'm {DEVELOPER_INFO.name}</span>
            <span className="badge-dot"></span>
            <span className="role-tag">{DEVELOPER_INFO.role}</span>
          </div>

          <h1 className="hero-title">
            Flutter apps, built <span className="gradient-text">end to end</span>.
          </h1>

          <p className="hero-lead">
            {DEVELOPER_INFO.summary}
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>See my projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#architecture" className="btn btn-secondary">
              <Layers size={16} />
              <span>Explore Architecture</span>
            </a>
            {/* <a href="#contact" className="btn btn-ghost">
              <span>Let's talk</span>
            </a> */}
          </div>

          {/* Facts / Metrics Counter Strip */}
          <div className="hero-facts-strip">
            {DEVELOPER_INFO.stats.map((stat, i) => (
              <div key={i} className="fact-item">
                <strong className="fact-value">{stat.value}</strong>
                <span className="fact-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Dart Code Card */}
        <div className="hero-code-wrapper">
          <div className="code-card-backdrop" aria-hidden="true"></div>
          <DartCodeCard />
        </div>
      </div>
    </section>
  );
};
