import React, { useState } from "react";
import { DEVELOPER_INFO } from "../../data/developerData";
import {
  Briefcase,
  GraduationCap,
  Building2,
  MessageSquare,
  Home,
  Share2,
  ChevronRight,
  Code2,
  Smartphone,
  LayoutGrid,
  Rocket,
  Shield,
  GitBranch,
  Cpu,
  Mail,
  Hexagon
} from "lucide-react";
import { FlutterIcon, LinkedinIcon, GithubIcon } from "../common/Icons";
import { TECH_ICONS, ROW1_TECH, ROW2_TECH } from "../../data/techStackData";

const doubleRow1 = [...ROW1_TECH, ...ROW1_TECH];
const doubleRow2 = [...ROW2_TECH, ...ROW2_TECH];

export const AboutSection = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handlePhotoFlip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
  };

  const handleAnimationEnd = () => {
    setIsFlipping(false);
  };
  const getDomainIcon = (iconName) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase size={20} />;
      case "GraduationCap":
        return <GraduationCap size={20} />;
      case "MessageSquare":
        return <MessageSquare size={20} />;
      case "Home":
        return <Home size={20} />;
      case "Building2":
        return <Building2 size={20} />;
      case "Share2":
        return <Share2 size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={18} />;
      case "Smartphone":
        return <Smartphone size={18} />;
      case "LayoutGrid":
        return <LayoutGrid size={18} />;
      case "Rocket":
        return <Rocket size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  const lifecycleStages = [
    {
      num: "01",
      title: "UI & State Architecture",
      icon: <Cpu size={18} />,
      desc: "Component breakdown, responsive layouts, Riverpod/GetX reactive state modeling."
    },
    {
      num: "02",
      title: "API & Firebase Services",
      icon: <GitBranch size={18} />,
      desc: "Robust REST integration, Firebase real-time data sync, token interceptors, and local caching."
    },
    {
      num: "03",
      title: "Testing & Debugging",
      icon: <Shield size={18} />,
      desc: "Edge-case handling, device responsiveness, frame rate profiling, and automated tests."
    },
    {
      num: "04",
      title: "Build & Store Release",
      icon: <Rocket size={18} />,
      desc: "Keystore signing, release pipelines, Play Console submissions, and iOS TestFlight delivery."
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Main Neo-Morphic Showcase Card */}
        <div className="about-showcase-frame">
          <div className="about-grid">
            {/* Left Column: Developer Profile Card */}
            <div className="about-photo-col">
              <div className="about-photo-card">
                {/* Available for opportunities badge */}
                <div className="about-status-badge">
                  <span className="status-pulse-dot" />
                  <span className="status-text">{DEVELOPER_INFO.contact.availability || "Available for opportunities"}</span>
                </div>

                {/* Photo Stage with 360 Flip Card */}
                <div
                  className="about-photo-frame"
                  aria-label="Hover to spin and reveal Flutter badge"
                  onMouseEnter={handlePhotoFlip}
                  onClick={handlePhotoFlip}
                >
                  <div
                    className={`photo-flip-card ${isFlipping ? "is-flipping-360" : ""}`}
                    onAnimationEnd={handleAnimationEnd}
                  >
                    {/* Front: Developer Profile Photo */}
                    <div className="photo-flip-face photo-flip-front">
                      <img
                        src="/RiteshPandile.png?v=2"
                        alt="Ritesh Pandile - Flutter Developer"
                        className="profile-image"
                      />
                    </div>

                    {/* Back: Flutter Icon Badge */}
                    <div className="photo-flip-face photo-flip-back">
                      <div className="flutter-back-inner">
                        <div className="flutter-icon-glow-wrap">
                          <img
                            src="/flutter-icon.png"
                            alt="Flutter"
                            className="flutter-back-icon"
                          />
                        </div>
                        <span className="flutter-back-badge">Flutter Developer</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlaid Floating Glass Identity Card */}
                <div className="about-id-card">
                  <div className="about-id-info">
                    <h3 className="about-id-name">{DEVELOPER_INFO.name}</h3>
                    <div className="about-id-subtitle">
                      <span className="id-sub-dot">•</span>
                      <span>{DEVELOPER_INFO.role}</span>
                      <span className="id-sub-dot">•</span>
                      <span>{DEVELOPER_INFO.experienceYears} Years Experience</span>
                    </div>
                  </div>

                  <div className="about-id-socials">
                    <a
                      href={DEVELOPER_INFO.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="id-social-btn"
                      title="LinkedIn"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                    <a
                      href={DEVELOPER_INFO.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="id-social-btn"
                      title="GitHub"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={`mailto:${DEVELOPER_INFO.contact.email}`}
                      className="id-social-btn"
                      title="Send Email"
                      aria-label="Send Email"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Integrated Philosophy Quote Box */}
                <div className="about-quote-box">
                  <span className="about-quote-mark">“</span>
                  <p className="about-quote-text">
                    "Taking complete ownership means bridging the gap between design and production. Every module is built for longevity, testability, and peak performance."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Domains & Key Metrics */}
            <div className="about-content-col">
              {/* Decorative Dot Grid */}
              <div className="about-dot-matrix-dec" />

              {/* Header: Badge, Title & Floating 3D Flutter Tile */}
              <div className="about-content-header">
                <div className="about-title-block">
                  <div className="section-badge about-core-badge">
                    <Hexagon size={14} className="badge-hex-icon" />
                    <span>Core Philosophy</span>
                  </div>

                  <h2 className="section-title about-main-title">
                    <span className="ownership-highlight-wrap">
                      <span className="ownership-gradient-word">Ownership</span>
                      <svg className="ownership-swoosh" viewBox="0 0 210 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14C55 4 150 4 206 12" stroke="url(#swoosh-gradient)" strokeWidth="4.5" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="swoosh-gradient" x1="4" y1="14" x2="206" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0284c7" />
                            <stop offset="0.5" stopColor="#3b82f6" />
                            <stop offset="1" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>{" "}
                    is how I work.
                  </h2>
                </div>

                {/* Floating 3D Flutter Tile with Hand-drawn Doodle */}
                <div className="about-flutter-badge-wrap">
                  <div className="flutter-doodle-caption">
                    <span>Turning Ideas into Real Apps</span>
                    <svg className="doodle-arrow-flutter" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 24 C16 28, 28 25, 36 12 M36 12 L28 12 M36 12 L38 20"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flutter-3d-tile">
                    <img
                      src="/flutter-icon.png"
                      alt="Flutter"
                      className="flutter-tile-img"
                    />
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="about-paragraphs">
                <p>
                  I'm a passionate <strong className="text-highlight-brand">Flutter</strong> developer who builds, develops, and maintains scalable, responsive, production-ready mobile applications using <strong className="text-highlight-brand">Flutter</strong> and <strong className="text-highlight-brand">Dart</strong>.
                </p>
                <p>
                  I've worked across job portals, learning management systems, business management systems, real-time chat, and society management. That means taking end-to-end ownership of projects and delivering complete modules: UI and state management, REST API integration, Firebase services, testing, debugging, and store deployment.
                </p>
                <p>
                  I write maintainable code, build reusable components, optimize app performance, and deliver reliable mobile solutions. I enjoy taking on challenging features, solving complex technical issues, and turning ideas into impactful mobile experiences.
                </p>
              </div>

              {/* Specialised Domains Section */}
              <div className="about-domains-section">
                <div className="domains-header-row">
                  <div className="domains-header-title">
                    <Hexagon size={14} className="domains-hex-icon" />
                    <span>SPECIALISED DOMAINS HANDLED:</span>
                  </div>
                  <div className="domains-header-line" />
                </div>

                <div className="domains-cards-grid">
                  {DEVELOPER_INFO.domains.map((dom, i) => (
                    <div key={i} className={`domain-card domain-card-${dom.color || "blue"}`}>
                      <div className="domain-card-icon-box">
                        {getDomainIcon(dom.icon)}
                      </div>
                      <div className="domain-card-info">
                        <h4 className="domain-card-title">{dom.name}</h4>
                        <p className="domain-card-subtitle">{dom.desc}</p>
                      </div>
                      <ChevronRight size={16} className="domain-card-chevron" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="about-metrics-strip">
                {DEVELOPER_INFO.ownershipMetrics?.map((met, i) => (
                  <div key={i} className={`about-metric-card metric-card-${met.color || "blue"}`}>
                    <div className="metric-icon-box">
                      {getMetricIcon(met.icon)}
                    </div>
                    <div className="metric-info">
                      <div className="metric-value">{met.value}</div>
                      <div className="metric-label">{met.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Lifecycle Flow Cards */}
        <div className="lifecycle-section">
          <div className="lifecycle-head text-center">
            <h3 className="lifecycle-title">End-to-End Module Delivery Lifecycle</h3>
            <p className="lifecycle-subtitle">
              How I take a project from technical blueprint to live store publication.
            </p>
          </div>

          <div className="lifecycle-cards-grid">
            {lifecycleStages.map((stage) => (
              <div key={stage.num} className="lifecycle-card">
                <div className="lifecycle-top">
                  <span className="lifecycle-num">{stage.num}</span>
                  <div className="lifecycle-icon-wrap">{stage.icon}</div>
                </div>
                <h4 className="lifecycle-card-title">{stage.title}</h4>
                <p className="lifecycle-card-desc">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Tech Stack Section (Dual-Row Infinite Marquee) */}
        <div className="about-techstack-section" id="stack">
          <div className="techstack-header text-center">
            <div className="section-badge techstack-badge">
              <Cpu size={14} className="badge-hex-icon" />
              <span>Full Engineering Stack</span>
            </div>
            <h3 className="techstack-title">Technologies, Platforms & Ecosystem</h3>
            <p className="techstack-subtitle">
              Languages, reactive state management, cloud backends, APIs, and mobile deployment tooling.
            </p>
          </div>

          <div className="techstack-marquee-wrapper" aria-label="Technologies used across all projects">
            {/* Row 1 - Slides Left */}
            <div className="tech-marquee-row">
              <div className="tech-marquee-track track-left">
                <div className="tech-marquee-set">
                  {doubleRow1.map((item, idx) => (
                    <div key={`t1-${idx}`} className="tech-chip">
                      <span className="tech-chip-icon" aria-hidden="true">
                        {TECH_ICONS[item.key]}
                      </span>
                      <span className="tech-chip-label">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-marquee-set" aria-hidden="true">
                  {doubleRow1.map((item, idx) => (
                    <div key={`t1-dup-${idx}`} className="tech-chip">
                      <span className="tech-chip-icon" aria-hidden="true">
                        {TECH_ICONS[item.key]}
                      </span>
                      <span className="tech-chip-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Slides Right */}
            <div className="tech-marquee-row">
              <div className="tech-marquee-track track-right">
                <div className="tech-marquee-set">
                  {doubleRow2.map((item, idx) => (
                    <div key={`t2-${idx}`} className="tech-chip">
                      <span className="tech-chip-icon" aria-hidden="true">
                        {TECH_ICONS[item.key]}
                      </span>
                      <span className="tech-chip-label">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-marquee-set" aria-hidden="true">
                  {doubleRow2.map((item, idx) => (
                    <div key={`t2-dup-${idx}`} className="tech-chip">
                      <span className="tech-chip-icon" aria-hidden="true">
                        {TECH_ICONS[item.key]}
                      </span>
                      <span className="tech-chip-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
