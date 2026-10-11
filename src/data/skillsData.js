export const SKILLS_DATA = [
  {
    id: "mobile",
    category: "Mobile Development",
    icon: "Smartphone",
    color: "#2563EB",
    domain: "Cross-Platform Mobile",
    description: "Core Flutter & Dart engineering for cross-platform Android and iOS applications.",
    impact: "Engineered scalable Flutter applications with 60fps custom animations, responsive layouts, and platform channels across Android & iOS production builds.",
    highlights: [
      { label: "Core Framework", value: "Flutter & Dart SDK" },
      { label: "Target Platforms", value: "Android & iOS" },
      { label: "Design Systems", value: "Material 3 & Cupertino" }
    ],
    skills: [
      { name: "Flutter", level: "Expert", highlight: true },
      { name: "Dart", level: "Expert", highlight: true },
      { name: "Responsive UI", level: "Advanced", highlight: false },
      { name: "Reusable Widgets", level: "Advanced", highlight: false },
      { name: "Custom Animations", level: "Advanced", highlight: false },
      { name: "Platform Channels", level: "Proficient", highlight: false },
      { name: "Material 3 & Cupertino", level: "Advanced", highlight: false }
    ]
  },
  {
    id: "architecture",
    category: "State Management & Architecture",
    icon: "Layers",
    color: "#059669",
    domain: "App Architecture & State",
    description: "Architectural patterns guaranteeing separation of concerns, testability, and reactive flow.",
    impact: "Standardized Clean Architecture & reactive Riverpod/BLoC patterns across 6+ production apps for bulletproof maintainability and separation of concerns.",
    highlights: [
      { label: "Primary State", value: "Riverpod Reactive" },
      { label: "Architecture", value: "Clean Architecture & MVVM" },
      { label: "Patterns", value: "Repository & BLoC Principles" }
    ],
    skills: [
      { name: "Riverpod", level: "Advanced", highlight: true },
      { name: "GetX", level: "Advanced", highlight: true },
      { name: "Provider", level: "Advanced", highlight: false },
      { name: "Clean Architecture", level: "Advanced", highlight: true },
      { name: "MVVM Pattern", level: "Advanced", highlight: false },
      { name: "BLoC Principles", level: "Proficient", highlight: false },
      { name: "Repository Pattern", level: "Advanced", highlight: false }
    ]
  },
  {
    id: "backend",
    category: "Backend & Cloud Integrations",
    icon: "Cloud",
    color: "#D97706",
    domain: "APIs, WebRTC & Cloud Services",
    description: "Seamless networking, real-time calling, cloud auth, Laravel APIs, and 3rd-party integrations.",
    impact: "Integrated Laravel backend APIs, RESTful architectures, WebRTC flat-to-flat calling, Google APIs, Cloud Firestore, and 3rd-party payment services.",
    highlights: [
      { label: "Backend & APIs", value: "Laravel & RESTful APIs" },
      { label: "Calling & Real-time", value: "WebRTC & Sockets" },
      { label: "Integrations", value: "Google APIs & 3rd-Party APIs" }
    ],
    skills: [
      { name: "RESTful APIs Integration", level: "Expert", highlight: true },
      { name: "Laravel APIs Integration", level: "Advanced", highlight: true },
      { name: "WebRTC", level: "Advanced", highlight: false },
      { name: "Google APIs Integration", level: "Advanced", highlight: true },
      { name: "3rd-Party APIs Integration", level: "Advanced", highlight: false },
      { name: "Firebase Firestore & Auth", level: "Advanced", highlight: true },
      { name: "FCM Push Notifications", level: "Advanced", highlight: true },
      { name: "WebSockets & Dio", level: "Advanced", highlight: false },
      { name: "Payment Gateways", level: "Proficient", highlight: false },
      { name: "JSON Serialization & Caching", level: "Advanced", highlight: false }
    ]
  },
  {
    id: "tools",
    category: "Tools, QA & Store Delivery",
    icon: "Rocket",
    color: "#7C3AED",
    domain: "DevOps & Store Deployment",
    description: "Tooling for version control, automated builds, testing, and store publishing.",
    impact: "Managed version control workflows, automated build pipelines, and delivered live app releases to Google Play Store and Apple TestFlight.",
    highlights: [
      { label: "App Publishing", value: "Play Store & TestFlight" },
      { label: "Version Control", value: "Git, GitHub & Branching" },
      { label: "Inspection", value: "Postman & DevTools Profiling" }
    ],
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Postman", level: "Advanced", highlight: false },
      { name: "Play Store Deployment", level: "Advanced", highlight: true },
      { name: "TestFlight & App Store", level: "Advanced", highlight: true },
      { name: "CI / CD Pipelines", level: "Proficient", highlight: false },
      { name: "Android Studio & VS Code", level: "Advanced", highlight: false },
      { name: "App Performance Profiling", level: "Proficient", highlight: false }
    ]
  }
];
