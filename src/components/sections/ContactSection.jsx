import React, { useState } from "react";
import { DEVELOPER_INFO } from "../../data/developerData";
import { Mail, Copy, Check, Send, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Flutter Project Inquiry",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Construct mailto link as fallback for immediate email transmission
    const mailtoUrl = `mailto:${DEVELOPER_INFO.contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card-wrapper">
          <div className="contact-grid">
            {/* Left Column: Direct Call to Action */}
            <div className="contact-left-col">
              <div className="section-badge badge-light">
                <Sparkles size={14} />
                <span>Let's Connect</span>
              </div>

              <h2 className="contact-headline">
                Let's build something <span className="highlight-text">impactful</span> together.
              </h2>

              <p className="contact-copy">
                I take ownership, solve problems independently and deliver reliable mobile solutions that make a real difference. If you have an Android, iOS, or cross-platform Flutter project in mind, let's talk.
              </p>

              <div className="contact-meta-pills">
                <div className="meta-pill">
                  <MapPin size={15} />
                  <span>Based in {DEVELOPER_INFO.contact.location} • Available Worldwide</span>
                </div>
                <div className="meta-pill">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>{DEVELOPER_INFO.contact.availability}</span>
                </div>
              </div>

              {/* Direct Link Buttons */}
              <div className="contact-links-group">
                <a
                  href={`mailto:${DEVELOPER_INFO.contact.email}`}
                  className="btn btn-primary btn-contact"
                >
                  <Mail size={18} />
                  <span>Email Ritesh</span>
                </a>

                <button
                  type="button"
                  className="btn btn-ghost btn-contact"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                </button>

                <a
                  href={DEVELOPER_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-contact"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={DEVELOPER_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-contact"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quick Inquiry Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h3 className="form-title">Send a Direct Message</h3>
                <p className="form-sub">
                  Have a Flutter project or opening? Drop a message directly to my inbox.
                </p>

                {formSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={42} className="success-icon" />
                    <h4>Thank You!</h4>
                    <p>
                      Your email client has been prepared with your message to{" "}
                      <strong>{DEVELOPER_INFO.contact.email}</strong>.
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="c-name">Your Name</label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-email">Your Email</label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-subject">Subject</label>
                      <input
                        id="c-subject"
                        type="text"
                        placeholder="e.g. Flutter Developer Role / Project Consultation"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="c-message">Project Details</label>
                      <textarea
                        id="c-message"
                        rows={4}
                        required
                        placeholder="Tell me about your mobile app requirements, timeline, or team..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full submit-btn">
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
