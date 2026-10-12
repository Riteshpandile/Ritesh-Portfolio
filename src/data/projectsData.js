export const PROJECTS_DATA = [
  {
    id: "jobs",
    name: "Achievers Jobs",
    subtitle: "Applicant & Employer Applications",
    short: "A",
    domain: "Recruitment & Career Platform",
    badge: "Job Portal",
    accentColor: "#2563EB",
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    title: "Applicant & Employer Applications",
    summary:
      "Developed and maintained two interconnected Flutter applications: an Applicant App for job seekers and an Employer App for recruiters. The platform streamlines the recruitment process, from job posting and applications to interview scheduling and candidate management.",
    points: [
      "Developed job listing, job search, and application submission workflows for applicants.",
      "Implemented paid job-posting functionality for employers.",
      "Built employer-side job management and applicant tracking features.",
      "Developed interview scheduling workflows, allowing employers to schedule interviews and applicants to book available time slots.",
      "Integrated REST APIs, Firebase services, and push notifications.",
      "Implemented state management using Riverpod and developed reusable UI components."
    ],
    achievement:
      "Contributed to an end-to-end recruitment ecosystem connecting job seekers and employers through job applications, paid listings, and interview scheduling.",
    tags: ["Flutter", "Dart", "Riverpod", "REST APIs", "Firebase", "Push Notifications"],
    highlights: [
      { label: "Architecture", value: "Applicant + Employer Apps" },
      { label: "State Control", value: "Riverpod Reactive" },
      { label: "Real-time", value: "Firebase & FCM" }
    ],
    image: "/projects/achievers-jobs.png"
  },
  {
    id: "lms",
    name: "LMS",
    subtitle: "Learning Management System",
    short: "R",
    domain: "Education & E-Learning",
    badge: "EdTech & LMS",
    accentColor: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    title: "Learning Management System",
    summary:
      "Worked on an LMS application designed to manage digital learning, student engagement, course assessments, and completion tracking. Administrators can publish learning courses, while students can access educational content, complete quizzes, earn points, and receive certificates.",
    points: [
      "Implemented course listing and course-viewing functionality for students.",
      "Developed learning progress and course completion tracking.",
      "Integrated quizzes and assessment workflows.",
      "Implemented leaderboard functionality with points to encourage student participation.",
      "Developed notices and announcements for students.",
      "Supported certificate generation or delivery upon successful course completion, based on the application's workflow.",
      "Integrated APIs for course content, assessments, student progress, and related data."
    ],
    achievement:
      "Helped deliver a structured digital learning experience combining courses, assessments, progress tracking, and student engagement.",
    tags: ["Flutter", "Dart", "REST APIs", "State Management", "Gamification", "Certificates"],
    highlights: [
      { label: "Engagement", value: "Leaderboard & Points" },
      { label: "Evaluation", value: "Quizzes & Tracking" },
      { label: "Delivery", value: "Certificates Flow" }
    ],
    image: "/projects/rrpl-lms.png"
  },
  {
    id: "credaibility",
    name: "Credaibility",
    subtitle: "AI-Powered Real Estate Chat Application",
    short: "C",
    domain: "PropTech & AI Chat",
    badge: "AI Real Estate",
    accentColor: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
    title: "AI-Powered Real Estate Chat Application",
    summary:
      "Worked on an AI-powered real estate application that enables prospective homebuyers to interact with an AI assistant, discover suitable properties, submit enquiries to builders, and schedule site visits.",
    points: [
      "Developed AI chat interfaces for property discovery and buyer assistance.",
      "Integrated workflows for personalized property recommendations.",
      "Implemented property enquiry functionality to connect interested buyers with builders.",
      "Developed site visit scheduling workflows for property inspections.",
      "Integrated backend APIs to manage property information, enquiries, and appointments.",
      "Built reusable Flutter components for a smooth, user-friendly experience."
    ],
    achievement:
      "Contributed to a digital property discovery journey connecting AI-assisted recommendations, builder enquiries, and site visit scheduling.",
    tags: ["Flutter", "Dart", "AI Chat Integration", "REST APIs", "Scheduling", "Reusable UI"],
    highlights: [
      { label: "AI Discovery", value: "Intelligent Assistant" },
      { label: "Appointments", value: "Site Visit Booking" },
      { label: "Enquiries", value: "Builder Lead Connect" }
    ],
    image: "/projects/credaibility.png"
  },
  {
    id: "relation-nest",
    name: "Relation Nest",
    subtitle: "Society Management Application",
    short: "N",
    domain: "Residential Community Management",
    badge: "Smart Community",
    accentColor: "#E11D48",
    gradient: "linear-gradient(135deg, #E11D48 0%, #BE123C 100%)",
    title: "Society Management Application",
    summary:
      "Developed and maintained multiple modules of Relation Nest, a residential society management application designed to simplify community operations, resident communication, visitor management, maintenance requests, and society payments.",
    points: [
      "Customer Unit Dashboard: Developed a unit-level dashboard to display relevant residential and society information.",
      "Ticket Management: Implemented ticket creation, tracking, and maintenance request workflows.",
      "Visitor Management: Worked on visitor entry and exit workflows and unit-wise calling functionality.",
      "Notice Board & Events: Built centralized interfaces for society announcements, updates, and community events.",
      "Checklist Management & Library: Implemented checklist categories, unit selection, and resident library features.",
      "Appointments, Dues & Amenities: Developed appointment scheduling, dues payment workflows, and community amenity reservations.",
      "Integration & CI/CD: Managed REST APIs, Firebase services, state management, Apple/Google app-signing, and GitHub Actions CI/CD workflows."
    ],
    achievement:
      "Contributed across multiple core modules of a society management platform, covering resident services, maintenance, communication, appointments, and payments, alongside cross-platform deployment and CI/CD.",
    tags: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Firebase",
      "Riverpod/GetX",
      "GitHub Actions",
      "Android",
      "iOS"
    ],
    highlights: [
      { label: "Core Modules", value: "10+ Resident Modules" },
      { label: "Store Release", value: "Android & iOS Store" },
      { label: "Automation", value: "GitHub Actions CI/CD" }
    ],
    image: "/projects/relation-nest.png"
  },
  {
    id: "bms",
    name: "BMS",
    subtitle: "Business Management System",
    short: "P",
    domain: "Business Operations & Management",
    badge: "Enterprise BMS",
    accentColor: "#D97706",
    gradient: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
    title: "Business Management System",
    summary:
      "Worked on BMS, a business management application designed to streamline internal business operations, employee management, task allocation, and enquiry handling through a centralized platform.",
    points: [
      "HRMS Module: Worked on employee-related management workflows and HR functionality.",
      "Task Assignment: Developed task assignment and tracking functionality to help managers allocate work to employees.",
      "Enquiries Module: Implemented enquiry management workflows to organize and track business enquiries.",
      "Business Operations: Contributed to additional modules supporting day-to-day organizational processes.",
      "Integrated backend APIs and developed reusable Flutter components.",
      "Improved UI consistency, module usability, and application maintainability."
    ],
    achievement:
      "Contributed to a centralized business application supporting HR processes, employee task management, and enquiry workflows.",
    tags: ["Flutter", "Dart", "GetX", "REST APIs", "Firebase", "HRMS Module", "Task Tracking"],
    highlights: [
      { label: "HR Operations", value: "HRMS & Attendance" },
      { label: "Workflows", value: "Task Allocation" },
      { label: "Architecture", value: "GetX State Patterns" }
    ],
    image: "/projects/portalwiz-bms.png"
  },
  {
    id: "nri-star",
    name: "NRI Star",
    subtitle: "Real Estate Referral & Commission Platform",
    short: "S",
    domain: "FinTech & Real Estate Referrals",
    badge: "Referral & Commission",
    accentColor: "#0D9488",
    gradient: "linear-gradient(135deg, #0D9488 0%, #0F766E 100%)",
    title: "Real Estate Referral & Commission Platform",
    summary:
      "Worked on NRI Star, a real estate referral platform where NRIs, referred to as “Stars” within the platform, can refer property projects to prospective buyers and earn commissions through successful referrals.",
    points: [
      "Developed interfaces for browsing and discovering real estate projects.",
      "Worked on project referral workflows that connect Stars with prospective property buyers.",
      "Supported referral and enquiry management functionality.",
      "Contributed to workflows for tracking referrals and associated commission information.",
      "Integrated APIs and developed reusable components for project and referral-related screens."
    ],
    achievement:
      "Contributed to a referral-based real estate platform designed to connect property projects with potential buyers and support commission-driven referrals.",
    tags: ["Flutter", "Dart", "REST APIs", "State Management", "Referral Engine", "Commissions"],
    highlights: [
      { label: "Ecosystem", value: "NRI Stars Network" },
      { label: "Tracking", value: "Referral & Leads" },
      { label: "Incentives", value: "Commission Tracker" }
    ],
    image: "/projects/nri-star.png"
  }
];
