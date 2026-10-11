import React, { useState } from "react";
import { ARCHITECTURE_DATA } from "../../data/architectureData";
import { Smartphone, Cpu, Database, Layers, ArrowRight, CheckCircle2, ShieldCheck, Repeat, Sparkles } from "lucide-react";

export const ArchitectureFlowSection = () => {
  const [selectedLayerId, setSelectedLayerId] = useState("presentation");
  const [activeStep, setActiveStep] = useState(1);

  const activeLayer =
    ARCHITECTURE_DATA.layers.find((l) => l.id === selectedLayerId) ||
    ARCHITECTURE_DATA.layers[0];

  const getLayerIcon = (id) => {
    switch (id) {
      case "presentation":
        return <Smartphone size={20} />;
      case "domain":
        return <Cpu size={20} />;
      case "data":
        return <Database size={20} />;
      case "core":
        return <Layers size={20} />;
      default:
        return <Layers size={20} />;
    }
  };

  return (
    <section className="architecture-section" id="architecture">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Architecture & Engineering Flow</span>
          </div>
          <h2 className="section-title">{ARCHITECTURE_DATA.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {ARCHITECTURE_DATA.subtitle}
          </p>
        </div>

        {/* Unidirectional Data Flow Stepper */}
        <div className="flow-stepper-card">
          <div className="flow-stepper-head">
            <div>
              <span className="flow-badge">Data Flow Pipeline</span>
              <h3 className="flow-title">How Data Moves: Request to Render</h3>
            </div>
            <p className="flow-desc">
              Click any step below to trace how user gestures flow through Clean Architecture layers into the reactive widget tree.
            </p>
          </div>

          <div className="flow-steps-grid">
            {ARCHITECTURE_DATA.flowSteps.map((stepItem) => {
              const isCurrent = activeStep === stepItem.step;
              const isCompleted = activeStep > stepItem.step;
              return (
                <button
                  key={stepItem.step}
                  type="button"
                  onClick={() => setActiveStep(stepItem.step)}
                  className={`flow-step-btn ${isCurrent ? "current" : ""} ${
                    isCompleted ? "completed" : ""
                  }`}
                  aria-pressed={isCurrent}
                >
                  <div className="step-num-badge">
                    {isCompleted ? <CheckCircle2 size={16} /> : stepItem.step}
                  </div>
                  <div className="step-content">
                    <span className="step-label">Step {stepItem.step}</span>
                    <strong className="step-heading">{stepItem.title}</strong>
                    <p className="step-explanation">{stepItem.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Architectural Layers Visualizer */}
        <div className="architecture-layers-grid">
          {/* Layer Selector Tabs */}
          <div className="layers-nav-list" role="tablist">
            <h4 className="layers-nav-heading">Clean Architecture Layers</h4>
            {ARCHITECTURE_DATA.layers.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`layer-nav-item ${isSelected ? "selected" : ""}`}
                  style={{
                    "--layer-accent": layer.color
                  }}
                >
                  <div className="layer-nav-icon">
                    {getLayerIcon(layer.id)}
                  </div>
                  <div className="layer-nav-text">
                    <span className="layer-badge-pill">{layer.badge}</span>
                    <strong className="layer-name">{layer.name}</strong>
                  </div>
                  <ArrowRight size={16} className="layer-arrow" />
                </button>
              );
            })}
          </div>

          {/* Layer Detail & Code View */}
          <div className="layer-detail-card">
            <div className="layer-detail-header">
              <div className="header-meta">
                <span
                  className="layer-tag"
                  style={{ backgroundColor: `${activeLayer.color}20`, color: activeLayer.color }}
                >
                  {activeLayer.badge}
                </span>
                <h3 className="layer-detail-title">{activeLayer.name}</h3>
              </div>
              <div className="layer-indicator" style={{ backgroundColor: activeLayer.color }}></div>
            </div>

            <p className="layer-detail-desc">{activeLayer.description}</p>

            <div className="layer-elements-block">
              <span className="elements-title">Core Building Blocks:</span>
              <div className="elements-tags">
                {activeLayer.elements.map((el, i) => (
                  <span key={i} className="element-chip">
                    <CheckCircle2 size={13} style={{ color: activeLayer.color }} />
                    {el}
                  </span>
                ))}
              </div>
            </div>

            <div className="layer-code-block">
              <div className="code-block-header">
                <span className="code-file-label">
                  flutter/lib/{activeLayer.id}/
                </span>
                <span className="code-lang-label">Dart 3.x</span>
              </div>
              <pre className="layer-code-pre">
                <code>{activeLayer.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Ritesh's Flutter Architecture */}
        <div className="arch-pillars-grid">
          <div className="arch-pillar-card">
            <div className="pillar-icon bg-blue">
              <Repeat size={18} />
            </div>
            <h4>Unidirectional Flow</h4>
            <p>
              Data cascades down to widgets, events bubble up through controllers. No circular dependencies or race conditions.
            </p>
          </div>

          <div className="arch-pillar-card">
            <div className="pillar-icon bg-emerald">
              <ShieldCheck size={18} />
            </div>
            <h4>Separation of Concerns</h4>
            <p>
              Presentation knows nothing about network sockets; domain business rules stay 100% agnostic of Flutter UI widgets.
            </p>
          </div>

          <div className="arch-pillar-card">
            <div className="pillar-icon bg-amber">
              <Database size={18} />
            </div>
            <h4>Offline-First Caching</h4>
            <p>
              Automatic fallback to local Hive/SQLite database storage when network disconnects, syncing upon reconnect.
            </p>
          </div>

          <div className="arch-pillar-card">
            <div className="pillar-icon bg-purple">
              <Smartphone size={18} />
            </div>
            <h4>Store-Grade Stability</h4>
            <p>
              Clean error handling with domain Failures, defensive null-safety, and smooth 60/120 FPS jank-free animations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
