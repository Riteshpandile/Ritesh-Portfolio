import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const CODE_SNIPPET = {
  filename: "ritesh_pandile.dart",
  code: `class Ritesh extends Developer {
  final role = 'Flutter Developer';
  final experience = 1.9; // years
  final stack = [
    'Flutter', 'Dart', 'Firebase',
    'REST APIs', 'Riverpod', 'GetX'
  ];

  @override
  Widget build(BuildContext context) {
    return Ownership(
      modules: 'end-to-end',
      ship: [Android, iOS],
      architecture: CleanArchitecture(),
    );
  }
}`
};

export const DartCodeCard = () => {
  const [copied, setCopied] = useState(false);
  const currentSnippet = CODE_SNIPPET;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-card" role="region" aria-label="Dart code editor preview">
      <div className="code-card-header">
        <div className="code-card-dots" aria-hidden="true">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>

        <div className="code-card-title">
          <span>ritesh_pandile.dart</span>
        </div>

        <button
          onClick={handleCopy}
          className="code-copy-btn"
          title="Copy code"
          aria-label="Copy Dart code to clipboard"
        >
          {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="code-card-body">
        <pre className="code-pre">
          <code>
            {currentSnippet.code.split("\n").map((line, idx) => (
              <div key={idx} className="code-line">
                <span className="line-num">{idx + 1}</span>
                <span className="line-text">{formatDartLine(line)}</span>
              </div>
            ))}
          </code>
        </pre>
        <span className="code-cursor" aria-hidden="true"></span>
      </div>

      <div className="code-card-footer">
        <div className="code-badge">
          <Terminal size={13} />
          <span>Dart 3.x • Flutter 3.x • Null Safety</span>
        </div>
        <span className="code-status">Production Ready</span>
      </div>
    </div>
  );
};

// Helper for lightweight Dart syntax tokens
function formatDartLine(line) {
  if (line.trim().startsWith("//")) {
    return <span className="c-comment">{line}</span>;
  }

  // Highlight common Dart keywords, types, and strings
  const parts = line.split(/(\b(?:class|extends|final|override|Widget|return|const|async|await|Future|Stream|final|super|try|catch)\b|'[^']*'|"[^"]*")/g);

  return parts.map((part, i) => {
    if (["class", "extends", "final", "override", "return", "const", "async", "await", "super", "try", "catch"].includes(part)) {
      return <span key={i} className="c-keyword">{part}</span>;
    }
    if (["Widget", "Developer", "BuildContext", "Ownership", "CleanArchitecture", "StateNotifierProvider", "JobNotifier", "AsyncValue", "Job", "GetJobsUseCase", "FirebaseFirestore", "FirebaseMessaging", "IChatService", "Message", "Future", "Stream"].includes(part)) {
      return <span key={i} className="c-type">{part}</span>;
    }
    if (part.startsWith("'") || part.startsWith('"')) {
      return <span key={i} className="c-string">{part}</span>;
    }
    if (/^\d+(\.\d+)?$/.test(part.trim())) {
      return <span key={i} className="c-number">{part}</span>;
    }
    return <span key={i} className="c-plain">{part}</span>;
  });
}
