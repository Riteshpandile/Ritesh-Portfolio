import React from "react";
import { DELIVERABLES_DATA } from "../../data/achievementsData";
import { ShieldCheck, Globe, Zap, Rocket, Code2, Sparkles, Award } from "lucide-react";

export const DeliverablesSection = () => {
  const getDeliverableIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck size={26} />;
      case "Globe":
        return <Globe size={26} />;
      case "Zap":
        return <Zap size={26} />;
      case "Rocket":
        return <Rocket size={26} />;
      case "Code2":
        return <Code2 size={26} />;
      default:
        return <Award size={26} />;
    }
  };

  return (
    <section className="deliverables-section" id="deliverables">
      <div className="container">
        <div className="section-head text-center">
          <div className="section-badge">
            <Award size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">What I've delivered.</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Responsibilities and capabilities proven in real production mobile project environments.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="deliverables-bento-grid">
          {DELIVERABLES_DATA.map((item) => (
            <article
              key={item.id}
              className={`bento-card card-${item.id} ${item.featured ? "featured" : ""}`}
              style={{ "--card-accent": item.color }}
            >
              <div className="bento-card-top">
                <span className="bento-tag">{item.tag}</span>
                <span className="bento-metrics-badge">{item.metrics}</span>
              </div>

              <div className="bento-card-icon-wrap">
                {getDeliverableIcon(item.icon)}
              </div>

              <div className="bento-card-body">
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
