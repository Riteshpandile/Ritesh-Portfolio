import React from "react";
import { DEVELOPER_INFO } from "../../data/developerData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <strong>{DEVELOPER_INFO.name}</strong>
            <span className="footer-divider">•</span>
            <span className="footer-role">
              {DEVELOPER_INFO.role} & Mobile Engineer
            </span>
          </div>
          <p className="footer-subtext">
            Architecting end-to-end production Flutter experiences for Android and iOS.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href={`mailto:${DEVELOPER_INFO.contact.email}`}
              className="footer-social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={DEVELOPER_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={DEVELOPER_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <small>© {currentYear} {DEVELOPER_INFO.name}. All rights reserved.</small>
          <small className="flex items-center gap-1">
            Engineered with React & Clean Architecture Principles
          </small>
        </div>
      </div>
    </footer>
  );
};
