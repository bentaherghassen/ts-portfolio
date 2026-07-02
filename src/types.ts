/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  category: "Full Stack" | "AI & ML" | "UI & UX" | "System";
  duration: string;
  role: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  items: { name: string; level: number; description?: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colorClass: string;
  accentText: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SLIDESHOW_ITEMS: SlideItem[] = [
  {
    id: "slide-1",
    title: "Synthetix AI Studio",
    subtitle: "AI SOLUTIONS ARCHITECTURE",
    description: "An orchestration workspace for composing, testing, and deploying serverless multi-agent AI pipelines. Features an interactive flow graph and real-time inference tracing.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-blue-600/20 to-purple-600/20",
    accentText: "Featuring Google Gemini Integration"
  },
  {
    id: "slide-2",
    title: "PulsePay Ledger",
    subtitle: "FINANCIAL INFRASTRUCTURE",
    description: "High-throughput double-entry ledger database built for real-time transaction processing. Handles robust ledger integrity checks, audit logs, and sub-millisecond settling.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-emerald-600/20 to-teal-600/20",
    accentText: "Secure & Globally Distributed"
  },
  {
    id: "slide-3",
    title: "Nebula Analytics",
    subtitle: "REAL-TIME DATA VISUALIZATION",
    description: "A streaming dashboard parsing millions of serverless event logs. Implements WebSockets, canvas-level rendering, and dynamic D3 chart grids with low CPU footprint.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-amber-600/20 to-rose-600/20",
    accentText: "300k+ events processed per second"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Synthetix AI Studio",
    description: "Visual low-code designer for building autonomous multi-agent systems. Orchestrate complex workflows with live evaluation metrics.",
    longDescription: "Synthetix AI Studio addresses the complexity of deploying agentic AI. It provides a drag-and-drop canvas to wire up prompting templates, memory layers, and tool integrations (such as web search or code interpreter) with serverless endpoint hosting. It uses React Flow for diagramming and implements structured feedback tracking to continuously refine AI models.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "Gemini API", "React Flow", "Tailwind CSS"],
    githubUrl: "https://github.com/ghassenbentaher/synthetix-ai-studio",
    demoUrl: "https://synthetix.example.com",
    category: "AI & ML",
    duration: "4 Months (2025)",
    role: "Lead Engineer & Architect"
  },
  {
    id: "proj-2",
    title: "PulsePay Ledger",
    description: "Distributed banking transaction ledger engine. Engineered for extreme reliability, absolute consistency, and auditability.",
    longDescription: "A bulletproof financial engine built using Event Sourcing architectural patterns. It guarantees linearizability of bank transactions and zero-loss guarantees under network splits. Developed custom dashboard graphs rendering balances and microsecond delays safely using Recharts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    tags: ["Go", "React", "PostgreSQL", "Docker", "gRPC", "Recharts"],
    githubUrl: "https://github.com/ghassenbentaher/pulsepay-ledger",
    demoUrl: "https://pulsepay.example.com",
    category: "Full Stack",
    duration: "5 Months (2025)",
    role: "Backend Architect & Front-end Developer"
  },
  {
    id: "proj-3",
    title: "Nebula Analytics Dashboard",
    description: "Dynamic telemetry aggregator parsing high-throughput streams. Employs D3.js and HTML5 Canvas for stutter-free visualization.",
    longDescription: "Nebula provides enterprise-scale metrics visualizer. It processes real-time CPU, memory, and database connection metrics. Features customized canvas rendering to draw line charts with 50,000 data points smoothly without sacrificing the main thread's browser performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["TypeScript", "React", "D3.js", "WebSockets", "CSS Grid", "Node.js"],
    githubUrl: "https://github.com/ghassenbentaher/nebula-analytics",
    demoUrl: "https://nebula.example.com",
    category: "UI & UX",
    duration: "3 Months (2024)",
    role: "Front-end Specialist"
  },
  {
    id: "proj-4",
    title: "Quantum Kernel Monitor",
    description: "Low-level Linux telemetry driver and companion visual web inspector. Track kernel scheduling and context switches.",
    longDescription: "A specialized system monitor compiling statistics from a custom Linux kernel eBPF program. It exposes a local high-performance server to broadcast thread allocations, process spawns, and resource contention logs straight to a lightweight React dashboard.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
    tags: ["Rust", "eBPF", "React", "WebAssembly", "Tailwind CSS"],
    githubUrl: "https://github.com/ghassenbentaher/quantum-kernel-monitor",
    demoUrl: "https://quantum.example.com",
    category: "System",
    duration: "6 Months (2024)",
    role: "Systems & Web Developer"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    items: [
      { name: "React / React 19", level: 95, description: "Advanced state orchestration, context, and hooks" },
      { name: "TypeScript", level: 90, description: "Strict static typing, generic utilities, and system architecture" },
      { name: "Tailwind CSS", level: 95, description: "Custom utility configuration, responsive web structures, Tailwind v4" },
      { name: "styled-components", level: 85, description: "CSS-in-JS component architecture and dynamic style themeing" },
      { name: "Framer Motion", level: 88, description: "Staggered transitions, hover micro-interactions, layout morphing" }
    ]
  },
  {
    category: "Backend & Systems",
    iconName: "Server",
    items: [
      { name: "Node.js / Express", level: 88, description: "REST API routing, robust middleware pipelines, error handlers" },
      { name: "Python / Go", level: 82, description: "Microservices, backend tools, scraping, and heavy computing" },
      { name: "SQL (PostgreSQL / Cloud SQL)", level: 85, description: "Optimized queries, custom indexes, transaction handling" },
      { name: "RESTful & GraphQL APIs", level: 90, description: "Secure, scalable contract-first schema architectures" }
    ]
  },
  {
    category: "DevOps & Cloud Systems",
    iconName: "Cloud",
    items: [
      { name: "Docker & Containerization", level: 80, description: "Environment isolated builds and slim multstage files" },
      { name: "Google Cloud Platform (GCP)", level: 75, description: "Cloud Run containers, IAM profiles, Cloud Storage bucket" },
      { name: "Git & Collaborative Workflows", level: 92, description: "Rebase paradigms, merge strategies, branch protection" },
      { name: "CI / CD Pipelines", level: 78, description: "Automated verification workflows and production deployments" }
    ]
  }
];
