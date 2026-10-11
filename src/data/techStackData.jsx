import React from "react";

export const TECH_ICONS = {
  flutter: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M14.314 0L2.3 12 6.8 16.5 23.3 0h-8.986z" fill="#02569B" />
      <path d="M14.314 11.229L7.543 18 12.043 22.5 23.3 11.229h-8.986z" fill="#0175C2" />
      <path d="M7.543 18l4.5 4.5 4.5-4.5-4.5-4.5 4.5z" fill="#29B6F6" />
    </svg>
  ),
  dart: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#0175c2" d="M12 2.5 21.5 12 12 21.5 2.5 12z" />
      <path fill="#40c4ff" d="M12 2.5 21.5 12H12z" />
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <polygon fill="#ffca28" points="5,17.7 8.3,2.8 11.2,8.5" />
      <polygon fill="#ffa000" points="5,17.7 11.2,8.5 13.8,13.5 12,21" />
      <polygon fill="#f57c00" points="12,21.5 5,17.7 13.8,13.5 19,17.2" />
      <polygon fill="#ffb300" points="13.8,13.5 15.3,7 19,17.2" />
    </svg>
  ),
  firestore: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <ellipse cx="12" cy="6" rx="7" ry="3" fill="#ffa000" />
      <path fill="#ff8f00" d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6c0 1.7-3.1 3-7 3S5 7.7 5 6z" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="1.4" />
    </svg>
  ),
  rest: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <text x="12" y="17" textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#7c4dff">&#123; &#125;</text>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <g fill="none" strokeWidth="3.2" transform="rotate(-90 12 12)">
        <circle cx="12" cy="12" r="7.5" stroke="#4285f4" strokeDasharray="11.2 35.9" />
        <circle cx="12" cy="12" r="7.5" stroke="#34a853" strokeDasharray="11.2 35.9" strokeDashoffset="-11.78" />
        <circle cx="12" cy="12" r="7.5" stroke="#fbbc05" strokeDasharray="11.2 35.9" strokeDashoffset="-23.56" />
        <circle cx="12" cy="12" r="7.5" stroke="#ea4335" strokeDasharray="11.2 35.9" strokeDashoffset="-35.34" />
      </g>
      <path d="M12 12h7.5" stroke="#4285f4" strokeWidth="3" fill="none" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <polygon fill="#2196f3" points="4,2.5 4,21.5 12.5,12" />
      <polygon fill="#00e676" points="4,2.5 16.5,9.5 12.5,12" />
      <polygon fill="#ffd600" points="16.5,9.5 21,12 16.5,14.5 12.5,12" />
      <polygon fill="#f44336" points="4,21.5 16.5,14.5 12.5,12" />
    </svg>
  ),
  appstore: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <rect x="2" y="2" width="20" height="20" rx="5.5" fill="#1c8cf5" />
      <path d="M12 6.5 8 17.5M12 6.5l4 11M7.2 14.2h9.6" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" fill="none" />
    </svg>
  ),
  laravel: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#FF2D20" d="M12 2L2 7l10 5 10-5-10-5zm0 18l-8-4v-5l8 4 8-4v5l-8 4z" />
    </svg>
  ),
  webrtc: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path d="M12 5.5 5.5 18M12 5.5 18.5 18M5.5 18h13" stroke="#2196f3" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="5.5" r="2.8" fill="#2196f3" />
      <circle cx="5.5" cy="18" r="2.8" fill="#00bcd4" />
      <circle cx="18.5" cy="18" r="2.8" fill="#ff9800" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#47a248" d="M12 2c1.5 3 5 6 5 11 0 4-2.5 7-4.5 8.5L12 22l-.5-.5C9.5 20 7 17 7 13c0-5 3.5-8 5-11z" />
      <path d="M12 10v12" stroke="#fff" strokeOpacity=".55" strokeWidth="1.1" fill="none" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <ellipse cx="12" cy="6" rx="7" ry="3" fill="#00758f" />
      <path fill="#00758f" d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6c0 1.7-3.1 3-7 3S5 7.7 5 6z" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" fill="none" stroke="#f29111" strokeWidth="1.7" />
    </svg>
  ),
  riverpod: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0" stroke="#26c6da" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  getx: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <circle cx="12" cy="12" r="9.5" fill="#7e57c2" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  provider: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path d="M12 3 3 8l9 5 9-5z" fill="#5c6bc0" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" stroke="#5c6bc0" strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  fcm: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#ff7043" d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zm0 18a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 21z" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" fill="#16a34a" />
      <rect x="2.5" y="9" width="19" height="2.6" fill="#fff" fillOpacity=".85" />
      <rect x="5" y="14" width="5" height="1.8" rx=".9" fill="#fff" fillOpacity=".85" />
    </svg>
  ),
  aichat: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#8b5cf6" d="M4 4.5h16v11H9.5L4 20.5z" />
      <circle cx="9" cy="10" r="1.2" fill="#fff" />
      <circle cx="12" cy="10" r="1.2" fill="#fff" />
      <circle cx="15" cy="10" r="1.2" fill="#fff" />
    </svg>
  ),
  actions: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#2088ff" strokeWidth="2" />
      <path d="M10 8.5 16 12l-6 3.5z" fill="#2088ff" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path d="M7 7v10M17 10c0 3-3 4.5-10 4.5" stroke="#f05033" strokeWidth="1.8" fill="none" />
      <circle cx="7" cy="5.5" r="2.3" fill="#f05033" />
      <circle cx="7" cy="18.5" r="2.3" fill="#f05033" />
      <circle cx="17" cy="8.5" r="2.3" fill="#f05033" />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <path fill="#3ddc84" d="M5.5 14a6.5 6.5 0 0 1 13 0z" />
      <rect x="5.5" y="15.2" width="13" height="6" rx="1.6" fill="#3ddc84" />
      <path d="M8.5 6.8 7 4.5M15.5 6.8 17 4.5" stroke="#3ddc84" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9.5" cy="11" r=".9" fill="#fff" />
      <circle cx="14.5" cy="11" r=".9" fill="#fff" />
    </svg>
  ),
  ios: (
    <svg viewBox="0 0 24 24" className="tech-svg">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#3c4050" />
      <text x="12" y="15.5" textAnchor="middle" fontFamily="sans-serif" fontSize="8.5" fontWeight="700" fill="#fff">iOS</text>
    </svg>
  )
};

export const ROW1_TECH = [
  { key: "flutter", name: "Flutter" },
  { key: "dart", name: "Dart" },
  { key: "firebase", name: "Firebase" },
  { key: "rest", name: "REST APIs" },
  { key: "google", name: "Google APIs" },
  { key: "play", name: "Google Play Store" },
  { key: "appstore", name: "Apple App Store" },
  { key: "webrtc", name: "WebRTC Calling Integration" },
  { key: "mongodb", name: "MongoDB" },
  { key: "mysql", name: "MySQL" },
  { key: "firestore", name: "Cloud Firestore" }
];

export const ROW2_TECH = [
  { key: "riverpod", name: "Riverpod" },
  { key: "getx", name: "GetX" },
  { key: "provider", name: "Provider" },
  { key: "fcm", name: "Push Notifications (FCM)" },
  { key: "payment", name: "Payment Integration" },
  { key: "aichat", name: "AI Chat Integration" },
  { key: "actions", name: "GitHub Actions CI/CD" },
  { key: "git", name: "Git & GitHub" },
  { key: "android", name: "Android SDK" },
  { key: "ios", name: "iOS Release & TestFlight" }
];

export const ALL_TECH_KEYS = [
  "flutter",
  "dart",
  "firebase",
  "rest",
  "riverpod",
  "getx",
  "android",
  "ios",
  "webrtc",
  "google",
  "play",
  "appstore",
  "fcm",
  "git",
  "actions",
  "mongodb",
  "mysql",
  "provider"
];
