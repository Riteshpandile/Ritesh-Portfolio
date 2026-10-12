import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Architecture", href: "#architecture" },
    { name: "Projects", href: "#projects" },
    { name: "Deliverables", href: "#deliverables" },
    { name: "Skills", href: "#skills" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#top" className="brand-logo" aria-label="Ritesh Pandile Homepage">
          <span className="brand-avatar">
            <svg viewBox="0 0 24 24" className="flutter-logo-icon" fill="currentColor">
              {/* Stylized Flutter F emblem */}
              <path d="M14.314 0L2.3 12 6.8 16.5 23.3 0h-8.986z" fill="#02569B" />
              <path d="M14.314 11.229L7.543 18 12.043 22.5 23.3 11.229h-8.986z" fill="#0175C2" />
              <path d="M7.543 18l4.5 4.5 4.5-4.5-4.5-4.5-4.5 4.5z" fill="#29B6F6" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Ritesh Pandile</strong>
            <small className="brand-sub">Flutter Dev</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="nav-actions">
          {/* Theme Switcher Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            <span>Get in touch</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mobile-cta-item">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="btn btn-primary w-full text-center"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
