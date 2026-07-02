/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "en" | "fr";

export interface TranslationDict {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    repo: string;
  };
  hero: {
    tagline: string;
    titlePre: string;
    titlePost: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
    downloadResume: string;
    scrollToExplore: string;
  };
  about: {
    title: string;
    subtitle: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    yearsOfCoding: string;
    projectsComplete: string;
    uptimeFocus: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  slideshow: {
    title: string;
    subtitle: string;
    examineCode: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    caseStudy: string;
    timeline: string;
    role: string;
    scope: string;
    caseStudyTitle: string;
    engineStack: string;
    launchDemo: string;
    repoLink: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    workingHoursLabel: string;
    workingHoursValue: string;
    formTitle: string;
    nameLabel: string;
    nameReq: string;
    emailLabelForm: string;
    emailReq: string;
    emailPattern: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messageReq: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
  };
  footer: {
    direct: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      repo: "Social Repository",
    },
    hero: {
      tagline: "Available for Full-Time, Remote or Freelance Opportunities.",
      titlePre: "Hi 👋 , I am",
      titlePost: "Ghassen ben taher",
      subtitle: "🐍 Pythonista , 📷 Canonista , 💻 Software developer , ☕ Coffee-holic !!",
      description: "Full-Stack Developer specializing in Python, Flask, React, and AI automation, dedicated to building accessible, scalable, and beautifully engineered digital experiences.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume",
      scrollToExplore: "Scroll to explore",
    },
    about: {
      title: "Who am i",
      subtitle: "Here is a look into my development philosophy, programming skills, core strengths, and educational journey.",
      heading: "Experiences",
      p1: "My name is Ghassen ben taher. I graduated with a degree in Administration and Security of Networks , and while my studies weren't directly in programming,I am a dedicated full-stack software engineer with a profound passion for structuring clean backend architectures, creating fluid frontend user interfaces, and automating workflows.",
      p2: "I specialize in utilizing Flask , React, Node.js, and TypeScript to build robust client applications, coupled with high-efficiency APIs written in Go or Python. My development goals center around creating high-fidelity experiences that feel natural to use while running seamlessly under the hood.",
      p3: "Lately, I have been focusing on the integration of smart large language models into standard application stacks. This includes creating system prompt routers, semantic vector indexes, and functional tooling layers that enable AI to securely act on the user's behalf.",
      yearsOfCoding: "Years of Coding",
      projectsComplete: "Projects Complete",
      uptimeFocus: "Uptime SLA Focus",
      card1Title: "Clean, Scalable Code",
      card1Desc: "Writing well-documented, test-driven TypeScript/Go code designed to scale horizontally.",
      card2Title: "AI Integrations",
      card2Desc: "Engineering secure, private multi-agent architectures using state-of-the-art serverless APIs.",
      card3Title: "Reliable Infrastructure",
      card3Desc: "Configuring container-isolated environments, secure database layers, and fast caching mechanisms.",
    },
    slideshow: {
      title: "Featured Highlights",
      subtitle: "A dynamic slideshow showcase highlighting my flagship projects, architecture standards, and key milestones.",
      examineCode: "Examine Code Project",
    },
    skills: {
      title: "Core Skills",
      subtitle: "A comprehensive view of my technical competencies, specialized libraries, and architectural frameworks.",
    },
    projects: {
      title: "Technical Projects",
      subtitle: "A curated selection of technical solutions, architectures, and open-source packages I have developed.",
      caseStudy: "View Case Study",
      timeline: "Timeline",
      role: "Role",
      scope: "Scope",
      caseStudyTitle: "Project Case Study & Abstract",
      engineStack: "Engine Stack & Dependencies",
      launchDemo: "Launch Live Demo",
      repoLink: "Github Repo",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Please note that I am a blind developer working with assistive technologies, Some tasks may require additional effort & time to complete, and my rates are set accordingly , Let's talk & do cool shit.",
      infoTitle: "Direct Information",
      infoDesc: "Feel free to contact me via email or phone. I usually respond to standard engineering queries within 24 hours.",
      emailLabel: "Primary Email",
      phoneLabel: "Direct Phone",
      locationLabel: "Base Location",
      workingHoursLabel: "Working Hours:",
      workingHoursValue: "Monday – Friday, 9:00 AM to 6:00 PM (GMT+1).",
      formTitle: "Send a Message",
      nameLabel: "Full Name",
      nameReq: "Full name is required.",
      emailLabelForm: "Email Address",
      emailReq: "Email address is required.",
      emailPattern: "Please specify a valid email.",
      subjectLabel: "Subject Line",
      subjectPlaceholder: "Project Partnership, Hiring opportunity, etc.",
      messageLabel: "Message Body",
      messageReq: "Message is required.",
      messagePlaceholder: "Describe your project, timeline, and requirements...",
      submitBtn: "Send Message",
      submittingBtn: "Transmitting Securely...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out, Ghassen. Your message has been encrypted and sent. I will get back to you shortly.",
      sendAnother: "Send Another Message",
    },
    footer: {
      direct: "Direct",
      rights: "All rights reserved.",
    }
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
      repo: "Dépôt Social",
    },
    hero: {
      tagline: "Disponible pour des opportunités en CDI, en télétravail ou en freelance.",
      titlePre: "Salut 👋, je suis",
      titlePost: "Ghassen ben taher",
      subtitle: "🐍 Pythonista , 📷 Canonista , 💻 Software developer , ☕ Coffee-holic !!",
      description: "Développeur Full-Stack spécialisé en Python, Flask, React et en automatisation par l'IA, dédié à la conception d'expériences numériques accessibles, évolutives et soigneusement conçues.",
      viewProjects: "Voir les projets",
      getInTouch: "Me contacter",
      downloadResume: "Télécharger le CV",
      scrollToExplore: "Faire défiler pour explorer",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Découvrez ma philosophie de développement, mes compétences en programmation, mes principaux atouts et mon parcours académique.",
      heading: "Expériences ", 
      p1: "Je m'appelle Ghassen Ben Taher. Je suis diplômé en Administration et Sécurité des Réseaux. Bien que ma formation ne soit pas directement axée sur la programmation, je suis un ingénieur logiciel full-stack passionné, animé par un profond intérêt pour la conception d'architectures backend propres et évolutives, la création d'interfaces utilisateur frontend fluides et intuitives, ainsi que l'automatisation des processus afin de développer des solutions efficaces et performantes..",
      p2: "Je me spécialise dans l'utilisation de React, Node.js et TypeScript pour concevoir des applications clientes solides, couplées à des API à haute efficacité écrites en Go ou Python. Mes objectifs de développement se concentrent sur la création d'expériences de haute fidélité simples à utiliser et performantes.",
      p3: "Dernièrement, je me concentre sur l'intégration de modèles de langage intelligents au sein de piles d'applications standard. Cela inclut la création de routeurs d'invites système, d'index de vecteurs sémantiques et de couches d'outils fonctionnelles.",
      yearsOfCoding: "Années de Code",
      projectsComplete: "Projets Réalisés",
      uptimeFocus: "Focus SLA Uptime",
      card1Title: "Code Propre et Évolutif",
      card1Desc: "Rédaction d'un code TypeScript/Go bien documenté, testé et conçu pour une évolution horizontale.",
      card2Title: "Intégrations IA",
      card2Desc: "Conception d'architectures multi-agents sécurisées et privées utilisant des API sans serveur de pointe.",
      card3Title: "Infrastructure Fiable",
      card3Desc: "Configuration d'environnements isolés par conteneur, de couches de base de données sécurisées et de mise en cache rapide.",
    },
    slideshow: {
      title: "Points Forts",
      subtitle: "Une présentation dynamique mettant en valeur mes projets phares, mes standards d'architecture et mes étapes clés.",
      examineCode: "Examiner le code du projet",
    },
    skills: {
      title: "Compétences Clés",
      subtitle: "Une vue d'ensemble de mes compétences techniques, bibliothèques spécialisées et frameworks d'architecture.",
    },
    projects: {
      title: "Projets Techniques",
      subtitle: "Une sélection rigoureuse de solutions techniques, d'architectures et de packages open-source que j'ai développés.",
      caseStudy: "Voir l'étude de cas",
      timeline: "Calendrier",
      role: "Rôle",
      scope: "Portée",
      caseStudyTitle: "Étude de cas du projet et résumé",
      engineStack: "Pile technique et dépendances",
      launchDemo: "Lancer la démo en direct",
      repoLink: "Dépôt GitHub",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Veuillez noter que je suis un développeur non-voyant travaillant avec des technologies d’assistance, Certaines tâches peuvent nécessiter un effort supplémentaire et davantage de temps pour être réalisées ; mes tarifs sont donc établis en conséquence. Discutons ensemble et créons des projets géniaux.",
      infoTitle: "Coordonnées Directes",
      infoDesc: "N'hésitez pas à me contacter par e-mail ou par téléphone. Je réponds généralement aux demandes d'ingénierie sous 24 heures.",
      emailLabel: "E-mail Principal",
      phoneLabel: "Téléphone Direct",
      locationLabel: "Localisation",
      workingHoursLabel: "Heures de travail:",
      workingHoursValue: "Lundi – Vendredi, 9h00 à 18h00 (GMT+1).",
      formTitle: "Envoyer un message",
      nameLabel: "Nom Complet",
      nameReq: "Le nom complet est obligatoire.",
      emailLabelForm: "Adresse e-mail",
      emailReq: "L'adresse e-mail est obligatoire.",
      emailPattern: "Veuillez spécifier une adresse e-mail valide.",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Partenariat de projet, Opportunité d'embauche, etc.",
      messageLabel: "Corps du message",
      messageReq: "Le message est obligatoire.",
      messagePlaceholder: "Décrivez votre projet, votre calendrier et vos besoins...",
      submitBtn: "Envoyer le message",
      submittingBtn: "Transmission sécurisée...",
      successTitle: "Message Envoyé !",
      successDesc: "Merci de m'avoir contacté, Ghassen. Votre message a été chiffré et envoyé. Je vous répondrai sous peu.",
      sendAnother: "Envoyer un autre message",
    },
    footer: {
      direct: "Ligne",
      rights: "Tous droits réservés.",
    }
  }
};

export interface SlideItemTranslated {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  colorClass: string;
  accentText: Record<Language, string>;
}

export const TRANSLATED_SLIDESHOW_ITEMS: SlideItemTranslated[] = [
  {
    id: "slide-1",
    title: {
      en: "FinTech: Recurring Payment & Subscription Manager",
      fr: "FinTech : Gestion des paiements récurrents et des abonnements"
    },
    subtitle: {
      en: "SaaS billing system",
      fr: "système de facturation SaaS"
    },
    description: {
      en: "A service manages subscription cycles, sends automated payment due notifications, and tracks the lifecycle of a subscription (active, trial, canceled)",
      fr: "Service gère les cycles d'abonnement, automatise l'envoi des notifications d'échéance de paiement et suit l'ensemble du cycle de vie des abonnements, depuis la période d'essai jusqu'aux états actif et annulé."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-blue-600/20 to-purple-600/20",
    accentText: {
      en: "Featuring Google Gemini Integration",
      fr: "Avec intégration de Google Gemini"
    }
  },
  {
    id: "slide-2",
    title: {
      en: "Secure Multi-Currency Exchange API",
      fr: "API sécurisée de change multidevises"
    },
    subtitle: {
      en: "FINANCIAL INFRASTRUCTURE",
      fr: "INFRASTRUCTURE FINANCIÈRE"
    },
    description: {
      en: "backend-only project that fetches real-time currency rates and provides an endpoint to calculate transaction costs, including service fees",
      fr: "Backend dédié à la récupération des taux de change en temps réel, fournissant une API sécurisée permettant de calculer les coûts de transaction, les conversions de devises et les frais de service"
    },
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-emerald-600/20 to-teal-600/20",
    accentText: {
      en: "Secure & Globally Distributed",
      fr: "Sécurisé & distribué à l'échelle mondiale"
    }
  },
  {
    id: "slide-3",
    title: {
      en: "Personal Developer Dashboard",
      fr: "Tableau de bord personnel du développeur"
    },
    subtitle: {
      en: "Centralize your development tools into one unified interface",
      fr: "Centralisez tous vos outils de développement au sein d'une interface unique et unifiée"
    },
    description: {
      en: "A dashboard that connects to your GitHub activity, your Supabase project status, and your n8n workflow logs",
      fr: "Un tableau de bord qui se connecte à votre activité GitHub, à l'état de vos projets Supabase et aux journaux d'exécution de vos workflows n8n"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    colorClass: "from-amber-600/20 to-rose-600/20",
    accentText: {
      en: "n8n integration",
      fr: "integration n8ne"
    }
  }
];

export interface ProjectTranslated {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  category: "Full Stack" | "AI & ML" | "UI & UX" | "System";
  duration: Record<Language, string>;
  role: Record<Language, string>;
}

export const TRANSLATED_PROJECTS_DATA: ProjectTranslated[] = [
  {
    id: "proj-1",
    title: {
      en: "Synthetix AI Studio",
      fr: "Synthetix AI Studio"
    },
    description: {
      en: "Visual low-code designer for building autonomous multi-agent systems. Orchestrate complex workflows with live evaluation metrics.",
      fr: "Concepteur visuel à faible code pour créer des systèmes autonomes multi-agents. Orchestrez des flux de travail complexes."
    },
    longDescription: {
      en: "Synthetix AI Studio addresses the complexity of deploying agentic AI. It provides a drag-and-drop canvas to wire up prompting templates, memory layers, and tool integrations (such as web search or code interpreter) with serverless endpoint hosting. It uses React Flow for diagramming and implements structured feedback tracking to continuously refine AI models.",
      fr: "Synthetix AI Studio répond à la complexité du déploiement de l'IA agentielle. Il offre un canevas glisser-déposer pour connecter les modèles d'invites, les couches de mémoire et les intégrations d'outils (comme la recherche web) avec un hébergement d'endpoint sans serveur."
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "Gemini API", "React Flow", "Tailwind CSS"],
    githubUrl: "https://github.com/ghassenbentaher/synthetix-ai-studio",
    demoUrl: "https://synthetix.example.com",
    category: "AI & ML",
    duration: {
      en: "4 Months (2025)",
      fr: "4 Mois (2025)"
    },
    role: {
      en: "Lead Engineer & Architect",
      fr: "Ingénieur Principal & Architecte"
    }
  },
  {
    id: "proj-2",
    title: {
      en: "PulsePay Ledger",
      fr: "PulsePay Ledger"
    },
    description: {
      en: "Distributed banking transaction ledger engine. Engineered for extreme reliability, absolute consistency, and auditability.",
      fr: "Moteur de grand livre de transactions bancaires distribué. Conçu pour une fiabilité extrême et une cohérence absolue."
    },
    longDescription: {
      en: "A bulletproof financial engine built using Event Sourcing architectural patterns. It guarantees linearizability of bank transactions and zero-loss guarantees under network splits. Developed custom dashboard graphs rendering balances and microsecond delays safely using Recharts.",
      fr: "Un moteur financier infaillible construit à l'aide de modèles d'architecture d'Event Sourcing. Il garantit la linéarisabilité des transactions bancaires et l'absence de perte en cas de scission du réseau."
    },
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    tags: ["Go", "React", "PostgreSQL", "Docker", "gRPC", "Recharts"],
    githubUrl: "https://github.com/ghassenbentaher/pulsepay-ledger",
    demoUrl: "https://pulsepay.example.com",
    category: "Full Stack",
    duration: {
      en: "5 Months (2025)",
      fr: "5 Mois (2025)"
    },
    role: {
      en: "Backend Architect & Front-end Developer",
      fr: "Architecte Backend & Développeur Front-end"
    }
  },
  {
    id: "proj-3",
    title: {
      en: "Nebula Analytics Dashboard",
      fr: "Tableau de Bord Nebula Analytics"
    },
    description: {
      en: "Dynamic telemetry aggregator parsing high-throughput streams. Employs D3.js and HTML5 Canvas for stutter-free visualization.",
      fr: "Agrégateur de télémétrie dynamique analysant les flux à haut débit. Utilise D3.js et HTML5 Canvas pour une visualisation fluide."
    },
    longDescription: {
      en: "Nebula provides enterprise-scale metrics visualizer. It processes real-time CPU, memory, and database connection metrics. Features customized canvas rendering to draw line charts with 50,000 data points smoothly without sacrificing the main thread's browser performance.",
      fr: "Nebula fournit un visualiseur de métriques à l'échelle de l'entreprise. Il traite en temps réel l'utilisation du processeur, de la mémoire et des connexions à la base de données."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["TypeScript", "React", "D3.js", "WebSockets", "CSS Grid", "Node.js"],
    githubUrl: "https://github.com/ghassenbentaher/nebula-analytics",
    demoUrl: "https://nebula.example.com",
    category: "UI & UX",
    duration: {
      en: "3 Months (2024)",
      fr: "3 Mois (2024)"
    },
    role: {
      en: "Front-end Specialist",
      fr: "Spécialiste Front-end"
    }
  },
  {
    id: "proj-4",
    title: {
      en: "Quantum Kernel Monitor",
      fr: "Moniteur de Noyau Quantique"
    },
    description: {
      en: "Low-level Linux telemetry driver and companion visual web inspector. Track kernel scheduling and context switches.",
      fr: "Pilote de télémétrie Linux bas niveau et inspecteur web visuel d'accompagnement pour suivre l'ordonnancement."
    },
    longDescription: {
      en: "A specialized system monitor compiling statistics from a custom Linux kernel eBPF program. It exposes a local high-performance server to broadcast thread allocations, process spawns, and resource contention logs straight to a lightweight React dashboard.",
      fr: "Un moniteur système spécialisé compilant les statistiques d'un programme eBPF personnalisé du noyau Linux. Il expose un serveur local haute performance."
    },
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
    tags: ["Rust", "eBPF", "React", "WebAssembly", "Tailwind CSS"],
    githubUrl: "https://github.com/ghassenbentaher/quantum-kernel-monitor",
    demoUrl: "https://quantum.example.com",
    category: "System",
    duration: {
      en: "6 Months (2024)",
      fr: "6 Mois (2024)"
    },
    role: {
      en: "Systems & Web Developer",
      fr: "Développeur Systèmes & Web"
    }
  }
];

export interface SkillCategoryTranslated {
  category: Record<Language, string>;
  iconName: string;
  items: { 
    name: string; 
    level: number; 
    description: Record<Language, string> 
  }[];
}

export const TRANSLATED_SKILLS_DATA: SkillCategoryTranslated[] = [
  {
    category: {
      en: "Frontend Development",
      fr: "Développement Front-End"
    },
    iconName: "Layout",
    items: [
      { 
        name: "React / React 19", 
        level: 95, 
        description: {
          en: "Advanced state orchestration, context, and hooks",
          fr: "Orchestration avancée de l'état, du contexte et des hooks"
        }
      },
      { 
        name: "TypeScript", 
        level: 90, 
        description: {
          en: "Strict static typing, generic utilities, and system architecture",
          fr: "Typage statique strict, utilitaires génériques et architecture système"
        }
      },
      { 
        name: "Tailwind CSS", 
        level: 95, 
        description: {
          en: "Custom utility configuration, responsive web structures, Tailwind v4",
          fr: "Configuration d'utilitaires personnalisés, structures réactives, Tailwind v4"
        }
      },
      { 
        name: "styled-components", 
        level: 85, 
        description: {
          en: "CSS-in-JS component architecture and dynamic style themeing",
          fr: "Architecture de composants CSS-in-JS et thématisation dynamique"
        }
      },
      { 
        name: "Framer Motion", 
        level: 88, 
        description: {
          en: "Staggered transitions, hover micro-interactions, layout morphing",
          fr: "Transitions échelonnées, micro-interactions au survol, morphing de mise en page"
        }
      }
    ]
  },
  {
    category: {
      en: "Backend & Systems",
      fr: "Backend & Systèmes"
    },
    iconName: "Server",
    items: [
      { 
        name: "Node.js / Express", 
        level: 88, 
        description: {
          en: "REST API routing, robust middleware pipelines, error handlers",
          fr: "Routage d'API REST, pipelines de middleware robustes, gestionnaires d'erreurs"
        }
      },
      { 
        name: "Python / Go", 
        level: 82, 
        description: {
          en: "Microservices, backend tools, scraping, and heavy computing",
          fr: "Microservices, outils backend, scraping et calculs lourds"
        }
      },
      { 
        name: "SQL (PostgreSQL / Cloud SQL)", 
        level: 85, 
        description: {
          en: "Optimized queries, custom indexes, transaction handling",
          fr: "Requêtes optimisées, index personnalisés, gestion des transactions"
        }
      },
      { 
        name: "RESTful & GraphQL APIs", 
        level: 90, 
        description: {
          en: "Secure, scalable contract-first schema architectures",
          fr: "Architectures de schémas contract-first sécurisées et évolutives"
        }
      }
    ]
  },
  {
    category: {
      en: "DevOps & Cloud Systems",
      fr: "DevOps & Systèmes Cloud"
    },
    iconName: "Cloud",
    items: [
      { 
        name: "Docker & Containerization", 
        level: 80, 
        description: {
          en: "Environment isolated builds and slim multstage files",
          fr: "Builds isolés de l'environnement et fichiers multistage légers"
        }
      },
      { 
        name: "Google Cloud Platform (GCP)", 
        level: 75, 
        description: {
          en: "Cloud Run containers, IAM profiles, Cloud Storage bucket",
          fr: "Conteneurs Cloud Run, profils IAM, buckets Cloud Storage"
        }
      },
      { 
        name: "Git & Collaborative Workflows", 
        level: 92, 
        description: {
          en: "Rebase paradigms, merge strategies, branch protection",
          fr: "Paradigmes de rebase, stratégies de fusion, protection de branches"
        }
      },
      { 
        name: "CI / CD Pipelines", 
        level: 78, 
        description: {
          en: "Automated verification workflows and production deployments",
          fr: "Flux de validation automatisés et déploiements en production"
        }
      }
    ]
  }
];
