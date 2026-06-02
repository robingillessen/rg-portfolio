export type Locale = "nl" | "en";

export const profile = {
  name: "Robin Gillessen",
  email: "robinlaurentius@gmail.com",
  linkedin: "https://www.linkedin.com/in/robin-gillessen",
  github: "https://github.com/R92G",
};

const sharedStack = {
  nl: {
    eyebrow: "Stack",
    title: "Een stack voor snel, toegankelijk frontendwerk.",
    intro:
      "Gekozen voor snelle delivery, duidelijke overdracht en onderhoudbare UI.",
    groups: [
      {
        label: "Core",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js"],
      },
      {
        label: "Interface",
        skills: ["Tailwind CSS", "SCSS", "Design Systems", "Storybook", "Figma"],
      },
      {
        label: "Quality",
        skills: ["WCAG 2.2", "ARIA", "Core Web Vitals", "Vitest", "Playwright"],
      },
      {
        label: "Commerce & Data",
        skills: ["Liquid", "GraphQL", "REST", "Vercel"],
      },
    ],
  },
  en: {
    eyebrow: "Stack",
    title: "A stack for fast, accessible frontend work.",
    intro:
      "Chosen for quick delivery, clear handover and maintainable UI.",
    groups: [
      {
        label: "Core",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js"],
      },
      {
        label: "Interface",
        skills: ["Tailwind CSS", "SCSS", "Design Systems", "Storybook", "Figma"],
      },
      {
        label: "Quality",
        skills: ["WCAG 2.2", "ARIA", "Core Web Vitals", "Vitest", "Playwright"],
      },
      {
        label: "Commerce & Data",
        skills: ["Liquid", "GraphQL", "REST", "Vercel"],
      },
    ],
  },
};

export const portfolio = {
  nl: {
    nav: [
      { label: "Profiel", href: "#profile" },
      { label: "Werk", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" },
    ],
    languageSwitchLabel: "Switch to English",
    skipLink: "Ga naar inhoud",
    hero: {
      eyebrow: "Senior Freelance React / Next.js Developer",
      title: "Frontend delivery onder druk.",
      intro:
        "Ik breng React, Next.js en Shopify verbeteringen snel naar productie, zonder kwaliteit of toegankelijkheid te laten vallen.",
      location: "Amsterdam / remote / hybride",
      availability: "Beschikbaar voor senior frontend opdrachten",
      primaryCta: "Plan een gesprek",
      secondaryCta: "Bekijk cases",
      proof: [
        "6+ jaar frontend ervaring",
        "React, Next.js, TypeScript",
        "Performance, WCAG 2.2, Shopify",
      ],
      stats: [
        { value: "8", label: "recente teams" },
        { value: "WCAG", label: "2.2 implementatie" },
        { value: "Shopify", label: "Plus storefronts" },
      ],
    },
    profile: {
      eyebrow: "Profiel",
      title: "Senior frontend capaciteit zonder overdracht-chaos.",
      body:
        "Ik stap in bij productteams, agencies en e-commerce organisaties wanneer er veel gebouwd moet worden, de planning strak is en de frontend geen verzameling losse fixes mag worden. Mijn kracht zit in snel productiewaardig leveren, zonder toegankelijkheid, performance of onderhoudbaarheid op te offeren.",
      highlights: [
        "Figma naar productie met oog voor details die gebruikers merken.",
        "Frontend architectuur die teamleden sneller laat doorbouwen.",
        "Heldere communicatie met business owners, product, design en backend.",
      ],
    },
    capabilities: [
      {
        icon: "rocket",
        title: "Feature delivery",
        text:
          "Complexe React en Next.js features opleveren in korte cycli, inclusief API-integraties, states, formulieren en edge cases.",
      },
      {
        icon: "commerce",
        title: "E-commerce frontends",
        text:
          "Shopify Plus, Liquid, productfilters, comparison flows, metafields en productervaringen die begrijpelijk zijn voor shoppers.",
      },
      {
        icon: "system",
        title: "Design systems",
        text:
          "Herbruikbare componenten, tokens, documentatie en patronen die Figma en productie dichter bij elkaar houden.",
      },
      {
        icon: "speed",
        title: "Performance & accessibility",
        text:
          "Core Web Vitals, bundle size, runtime performance, keyboard navigatie, ARIA en WCAG 2.2 implementatie.",
      },
    ],
    work: {
      eyebrow: "Geselecteerd werk",
      title: "Cases die snelheid, structuur en businesswaarde laten zien.",
      intro:
        "Geen productielinks of vage visuals. De cases tonen welk probleem is opgelost, wat er is gebouwd en waarom dat relevant was voor het team.",
      outcomeLabel: "Resultaat",
      scopeLabel: "Scope",
      items: [
        {
          company: "Stroom Mee",
          role: "Senior Freelance Frontend Developer",
          period: "mei 2026 - heden",
          type: "Product build",
          outcome:
            "Een Next.js applicatie vanaf nul met custom design system en preview workflows waarmee niet-technische teamleden sneller kunnen meebewegen.",
          scope: [
            "Component library en Figma-to-production workflow",
            "LLM-gestuurde preview branches voor kortere feedbackloops",
            "CI/CD en developer experience voor snelle iteraties",
          ],
          stack: ["Next.js", "React", "TypeScript", "Design Systems", "CI/CD"],
        },
        {
          company: "Fitwinkel",
          role: "Senior Freelance Shopify Developer",
          period: "jan. 2026 - apr. 2026",
          type: "E-commerce",
          outcome:
            "Een high-traffic Shopify Plus storefront met betere productnavigatie, filterlogica en contentstructuren voor een grote Nederlandse retailer.",
          scope: [
            "Custom Liquid, JavaScript en SCSS theme componenten",
            "Numerieke filters, productvergelijking en subcategorie navigatie",
            "Metafields en metaobjects voor dynamische content",
          ],
          stack: ["Liquid", "JavaScript", "TypeScript", "SCSS"],
        },
        {
          company: "Pantyr",
          role: "Freelance Frontend Developer - WCAG 2.2",
          period: "okt. 2025 - apr. 2026",
          type: "Accessibility",
          outcome:
            "React applicaties toegankelijker gemaakt voor software die door overheid en sociale veiligheidsorganisaties wordt gebruikt.",
          scope: [
            "WCAG 2.2 migratie over meerdere applicaties",
            "Focus management, ARIA patronen en keyboard flows",
            "Component audits en refactors voor inclusieve UX",
          ],
          stack: ["React", "TypeScript", "WCAG 2.2"],
        },
        {
          company: "Ampère",
          role: "Senior Freelance React / Next.js Developer",
          period: "sep. 2025 - apr. 2026",
          type: "Logistics SaaS",
          outcome:
            "Data-intensieve logistieke interfaces gebouwd met herbruikbare UI en duidelijke frontend architectuur voor operationele teams.",
          scope: [
            "React en Next.js features met TypeScript",
            "Interne design-system componenten",
            "REST API-integraties voor operationele dashboards",
          ],
          stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST"],
        },
        {
          company: "Y.digital",
          role: "Freelance Frontend Developer",
          period: "feb. 2025 - sep. 2025",
          type: "Agency delivery",
          outcome:
            "Enterprise webplatformen met robuuste formulieren, datatabellen en contentflows voor zakelijke gebruikers.",
          scope: [
            "Herbruikbare React componenten",
            "GraphQL, REST en headless CMS integraties",
            "Samenwerking met lead developers, design en product",
          ],
          stack: ["Next.js", "React", "TypeScript", "GraphQL", "Figma"],
        },
        {
          company: "Tournament Software",
          role: "Freelance Frontend Developer",
          period: "nov. 2024 - sep. 2025",
          type: "Realtime interfaces",
          outcome:
            "Tournament management en live results interfaces verbeterd voor organisatoren, spelers en federaties.",
          scope: [
            "TypeScript features voor draws, rankings en resultaten",
            "Modernisering van UI componenten",
            "UX verbetering voor data-heavy interfaces",
          ],
          stack: ["TypeScript", "React", "JavaScript", "UX", "Frontend Tooling"],
        },
        {
          company: "WoningNet",
          role: "Front-end Developer",
          period: "mrt. 2022 - dec. 2024",
          type: "Public platform",
          outcome:
            "Betrouwbare en toegankelijke workflows op een publiek platform voor sociale woningverdeling in Nederland.",
          scope: [
            "Formulieren, zoekflows en filterinterfaces",
            "UX verbeteringen voor een brede doelgroep",
            "Samenwerking met SCRUM teams en product owners",
          ],
          stack: ["JavaScript", "HTML", "CSS", "TypeScript", "Accessibility"],
        },
        {
          company: "Reliving.nl",
          role: "Freelance Front-end Developer",
          period: "okt. 2023 - feb. 2024",
          type: "Marketplace",
          outcome:
            "Productervaring, analytics en uploadflows verbeterd voor een Nederlandse marketplace voor tweedehands designmeubels.",
          scope: [
            "Product detail page met focus op Core Web Vitals",
            "Herbruikbare business logic laag",
            "Frontend voor AI-gestuurde chatbot en uploadflow",
          ],
          stack: ["Next.js", "React", "TypeScript", "Vercel", "Analytics"],
        },
      ],
    },
    stack: sharedStack.nl,
    process: {
      eyebrow: "Werkwijze",
      title: "Snel leveren, zonder shortcuts die later pijn doen.",
      steps: [
        {
          title: "Scherp maken",
          text:
            "Doel, deadline, risico's en afhankelijkheden helder voordat er code wordt geschreven.",
        },
        {
          title: "Bouwen in slices",
          text:
            "Kleine reviewbare stappen met duidelijke UI states, edge cases en acceptatiepunten.",
        },
        {
          title: "Productieklaar maken",
          text:
            "Performance, accessibility, responsive gedrag en overdraagbaarheid worden meegenomen voor release.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Frontend deadline, Shopify verbetering of React refactor?",
      intro:
        "Stuur kort wat er speelt. Ik reageer met een praktische inschatting van aanpak, timing en eerste stappen.",
      emailLabel: "Mail Robin",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      mailSubject: "Frontend opdracht",
      details: [
        "React / Next.js feature delivery",
        "Shopify Plus front-end",
        "TypeScript migraties",
        "Design systems",
        "Performance audits",
        "WCAG 2.2 implementatie",
      ],
    },
    footer: "Senior Freelance Frontend Developer - React, Next.js, TypeScript",
  },
  en: {
    nav: [
      { label: "Profile", href: "#profile" },
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" },
    ],
    languageSwitchLabel: "Schakel naar Nederlands",
    skipLink: "Skip to content",
    hero: {
      eyebrow: "Senior Freelance React / Next.js Developer",
      title: "Frontend delivery under pressure.",
      intro:
        "I ship React, Next.js and Shopify improvements fast, without dropping quality or accessibility.",
      location: "Amsterdam / remote / hybrid",
      availability: "Available for senior frontend engagements",
      primaryCta: "Book a call",
      secondaryCta: "View cases",
      proof: [
        "6+ years frontend experience",
        "React, Next.js, TypeScript",
        "Performance, WCAG 2.2, Shopify",
      ],
      stats: [
        { value: "8", label: "recent teams" },
        { value: "WCAG", label: "2.2 implementation" },
        { value: "Shopify", label: "Plus storefronts" },
      ],
    },
    profile: {
      eyebrow: "Profile",
      title: "Senior frontend capacity without handover chaos.",
      body:
        "I join product teams, agencies and e-commerce organizations when a lot needs to be shipped, the planning is tight and the frontend cannot become a pile of one-off fixes. My strength is delivering production-ready work quickly without sacrificing accessibility, performance or maintainability.",
      highlights: [
        "Figma to production with details users actually notice.",
        "Frontend architecture that helps teams keep building faster.",
        "Clear communication with business owners, product, design and backend.",
      ],
    },
    capabilities: [
      {
        icon: "rocket",
        title: "Feature delivery",
        text:
          "Complex React and Next.js features shipped in short cycles, including API integrations, states, forms and edge cases.",
      },
      {
        icon: "commerce",
        title: "E-commerce frontends",
        text:
          "Shopify Plus, Liquid, product filters, comparison flows, metafields and product experiences shoppers understand.",
      },
      {
        icon: "system",
        title: "Design systems",
        text:
          "Reusable components, tokens, documentation and patterns that keep Figma and production closer together.",
      },
      {
        icon: "speed",
        title: "Performance & accessibility",
        text:
          "Core Web Vitals, bundle size, runtime performance, keyboard navigation, ARIA and WCAG 2.2 implementation.",
      },
    ],
    work: {
      eyebrow: "Selected work",
      title: "Cases that show speed, structure and business value.",
      intro:
        "No production links or vague visuals. The cases show the problem, what was built and why it mattered to the team.",
      outcomeLabel: "Outcome",
      scopeLabel: "Scope",
      items: [
        {
          company: "Stroom Mee",
          role: "Senior Freelance Frontend Developer",
          period: "May 2026 - present",
          type: "Product build",
          outcome:
            "A Next.js application built from the ground up with a custom design system and preview workflows that help non-technical teammates move faster.",
          scope: [
            "Component library and Figma-to-production workflow",
            "LLM-powered preview branches for shorter feedback loops",
            "CI/CD and developer experience for fast iteration",
          ],
          stack: ["Next.js", "React", "TypeScript", "Design Systems", "CI/CD"],
        },
        {
          company: "Fitwinkel",
          role: "Senior Freelance Shopify Developer",
          period: "Jan 2026 - Apr 2026",
          type: "E-commerce",
          outcome:
            "A high-traffic Shopify Plus storefront with better product navigation, filtering logic and content structures for a major Dutch retailer.",
          scope: [
            "Custom Liquid, JavaScript and SCSS theme components",
            "Numeric filters, product comparison and subcategory navigation",
            "Metafields and metaobjects for dynamic content",
          ],
          stack: ["Liquid", "JavaScript", "TypeScript", "SCSS"],
        },
        {
          company: "Pantyr",
          role: "Freelance Frontend Developer - WCAG 2.2",
          period: "Oct 2025 - Apr 2026",
          type: "Accessibility",
          outcome:
            "Improved accessibility across React applications used by Dutch government and social safety organizations.",
          scope: [
            "WCAG 2.2 migration across multiple applications",
            "Focus management, ARIA patterns and keyboard flows",
            "Component audits and refactors for inclusive UX",
          ],
          stack: ["React", "TypeScript", "WCAG 2.2"],
        },
        {
          company: "Ampère",
          role: "Senior Freelance React / Next.js Developer",
          period: "Sep 2025 - Apr 2026",
          type: "Logistics SaaS",
          outcome:
            "Data-heavy logistics interfaces built with reusable UI and clear frontend architecture for operational teams.",
          scope: [
            "React and Next.js features with TypeScript",
            "Internal design-system components",
            "REST API integrations for operational dashboards",
          ],
          stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST"],
        },
        {
          company: "Y.digital",
          role: "Freelance Frontend Developer",
          period: "Feb 2025 - Sep 2025",
          type: "Agency delivery",
          outcome:
            "Enterprise web platforms with robust forms, data tables and content flows for business users.",
          scope: [
            "Reusable React components",
            "GraphQL, REST and headless CMS integrations",
            "Collaboration with lead developers, design and product",
          ],
          stack: ["Next.js", "React", "TypeScript", "GraphQL", "Figma"],
        },
        {
          company: "Tournament Software",
          role: "Freelance Frontend Developer",
          period: "Nov 2024 - Sep 2025",
          type: "Realtime interfaces",
          outcome:
            "Improved tournament management and live results interfaces for organizers, players and federations.",
          scope: [
            "TypeScript features for draws, rankings and results",
            "Modernized UI components",
            "UX improvements for data-heavy interfaces",
          ],
          stack: ["TypeScript", "React", "JavaScript", "UX", "Frontend Tooling"],
        },
        {
          company: "WoningNet",
          role: "Front-end Developer",
          period: "Mar 2022 - Dec 2024",
          type: "Public platform",
          outcome:
            "Reliable and accessible workflows on a public social housing allocation platform in the Netherlands.",
          scope: [
            "Forms, search flows and filtering interfaces",
            "UX improvements for a broad audience",
            "Collaboration with SCRUM teams and product owners",
          ],
          stack: ["JavaScript", "HTML", "CSS", "TypeScript", "Accessibility"],
        },
        {
          company: "Reliving.nl",
          role: "Freelance Front-end Developer",
          period: "Oct 2023 - Feb 2024",
          type: "Marketplace",
          outcome:
            "Improved product experience, analytics and upload flows for a Dutch second-hand design furniture marketplace.",
          scope: [
            "Product detail page focused on Core Web Vitals",
            "Reusable business logic layer",
            "Frontend for an AI-powered chatbot and upload flow",
          ],
          stack: ["Next.js", "React", "TypeScript", "Vercel", "Analytics"],
        },
      ],
    },
    stack: sharedStack.en,
    process: {
      eyebrow: "Process",
      title: "Ship fast without shortcuts that hurt later.",
      steps: [
        {
          title: "Clarify",
          text:
            "Goal, deadline, risks and dependencies are made clear before code starts.",
        },
        {
          title: "Build in slices",
          text:
            "Small reviewable steps with clear UI states, edge cases and acceptance points.",
        },
        {
          title: "Production-ready",
          text:
            "Performance, accessibility, responsive behavior and handover are handled before release.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Frontend deadline, Shopify improvement or React refactor?",
      intro:
        "Send a short note about what is going on. I will reply with a practical view on approach, timing and first steps.",
      emailLabel: "Email Robin",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      mailSubject: "Frontend engagement",
      details: [
        "React / Next.js feature delivery",
        "Shopify Plus frontend",
        "TypeScript migrations",
        "Design systems",
        "Performance audits",
        "WCAG 2.2 implementation",
      ],
    },
    footer: "Senior Freelance Frontend Developer - React, Next.js, TypeScript",
  },
} as const;
