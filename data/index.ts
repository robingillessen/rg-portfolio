export type Locale = "nl" | "en";

export const profile = {
  name: "Robin Gillessen",
  email: "robinlaurentius@gmail.com",
  linkedin: "https://www.linkedin.com/in/robin-gillessen",
  github: "https://github.com/robingillessen",
};

export const portfolio = {
  nl: {
    nav: [
      {
        label: "Profiel",
        href: "#profile",
      },
      {
        label: "Werk",
        href: "#work",
      },
      {
        label: "Stack",
        href: "#stack",
      },
      {
        label: "Contact",
        href: "#contact",
      },
    ],
    languageSwitchLabel: "Switch to English",
    skipLink: "Ga naar inhoud",
    hero: {
      eyebrow: "Senior freelance React / Next.js developer",
      title: "Features live in\ndagen, niet weken.",
      intro:
        "Ik help product- en e-commerce teams sneller bouwen, met frontend die goed werkt én werkbaar blijft.",
      location: "Amsterdam",
      availability: "Remote / hybride",
      primaryCta: "Plan een gesprek",
      secondaryCta: "Bekijk cases",
      proof: ["Complexe frontend", "Heldere componenten", "Shopify"],
      stats: [
        {
          value: "14+",
          label: "teams versterkt",
        },
        {
          value: "WCAG 2.2",
          label: "Toegankelijke interfaces",
        },
        {
          value: "Shopify Plus",
          label: "Maatwerk storefronts",
        },
      ],
      proofMobile: ["Frontend", "Componenten", "Shopify"],
    },
    profile: {
      eyebrow: "Profiel",
      title: "Snel bouwen.\nGoed blijven bouwen.",
      body: "Ik stap in bij product- en e-commerce teams die extra frontendkracht nodig hebben. Ik vertaal requirements naar werkende features en een duidelijke componentstructuur.",
      highlights: [
        "Complexe flows, overzichtelijke componenten.",
        "Van businessvraag naar werkende techniek.",
        "Direct contact met product, design en backend.",
      ],
    },
    capabilities: [
      {
        icon: "rocket",
        title: "Feature delivery",
        text: "React- en Next.js-features, van formulieren tot API-integraties.",
      },
      {
        icon: "commerce",
        title: "E-commerce",
        text: "Shopify Plus, productfilters en maatwerk in Liquid.",
      },
      {
        icon: "system",
        title: "Design systems",
        text: "Componenten, tokens en documentatie voor je hele team.",
      },
      {
        icon: "speed",
        title: "Performance & WCAG",
        text: "Snelle, toegankelijke interfaces. Ook met een toetsenbord.",
      },
    ],
    work: {
      eyebrow: "Geselecteerd werk",
      title: "Gebouwd met deze teams.",
      intro:
        "Een selectie van productplatformen, webshops en toegankelijke interfaces.",
      outcomeLabel: "Resultaat",
      scopeLabel: "Scope",
      items: [
        {
          company: "Stroom Mee",
          role: "Senior Freelance Frontend Developer",
          period: "mei 2026 – heden",
          type: "Product development",
          outcome:
            "Een Next.js-app vanaf nul, met een eigen design system en previews voor het hele team.",
          scope: ["Component library", "Preview-workflows", "CI/CD"],
          stack: ["Next.js", "React", "TypeScript"],
        },
        {
          company: "Fitwinkel",
          role: "Senior Freelance Shopify Developer",
          period: "jan. – apr. 2026",
          type: "Shopify development",
          outcome:
            "Een Shopify Plus-storefront met betere productnavigatie, filters en vergelijkingen.",
          scope: ["Liquid-componenten", "Productfilters", "Metafields"],
          stack: ["Shopify Plus", "JavaScript", "SCSS"],
        },
        {
          company: "Pantyr",
          role: "Freelance Frontend Developer - WCAG 2.2",
          period: "okt. 2025 – apr. 2026",
          type: "Toegankelijkheid",
          outcome:
            "React-applicaties toegankelijker gemaakt voor overheid en sociale veiligheid.",
          scope: ["WCAG 2.2", "Focus management", "Component-audits"],
          stack: ["React", "TypeScript", "WCAG 2.2"],
        },
        {
          company: "Ampère",
          role: "Senior Freelance React / Next.js Developer",
          period: "sep. 2025 – apr. 2026",
          type: "Frontend development",
          outcome:
            "Logistieke dashboards met herbruikbare UI voor operationele teams.",
          scope: ["Design system", "API-integraties", "Dashboards"],
          stack: ["React", "Next.js", "TypeScript"],
        },
        {
          company: "Y.digital",
          role: "Freelance Frontend Developer",
          period: "feb. – sep. 2025",
          type: "Frontend development",
          outcome:
            "Webplatformen met formulieren, datatabellen en contentflows.",
          scope: ["React-componenten", "GraphQL", "Headless CMS"],
          stack: ["Next.js", "React", "GraphQL"],
        },
        {
          company: "Tournament Software",
          role: "Freelance Frontend Developer",
          period: "nov. 2024 – sep. 2025",
          type: "Frontend development",
          outcome:
            "Toernooi- en live-resultateninterfaces voor spelers en organisatoren.",
          scope: ["Rankings", "Live resultaten", "UI-modernisering"],
          stack: ["TypeScript", "React", "JavaScript"],
        },
        {
          company: "WoningNet",
          role: "Front-end Developer",
          period: "mrt. 2022 – dec. 2024",
          type: "Frontend development",
          outcome:
            "Toegankelijke zoek- en aanvraagflows voor sociale huurwoningen.",
          scope: ["Formulieren", "Zoeken en filteren", "Toegankelijkheid"],
          stack: ["JavaScript", "HTML", "CSS"],
        },
        {
          company: "Reliving.nl",
          role: "Freelance Front-end Developer",
          period: "okt. 2023 – feb. 2024",
          type: "Frontend development",
          outcome:
            "Productpagina’s en uploadflows voor tweedehands designmeubels.",
          scope: ["Core Web Vitals", "Analytics", "Chatbot-frontend"],
          stack: ["Next.js", "React", "Vercel"],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "De tools waarmee ik bouw.",
      intro:
        "Voor snelle ontwikkeling en een frontend die je team kan onderhouden.",
      groups: [
        {
          label: "Core",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Vite",
            "Node.js",
          ],
        },
        {
          label: "Interface",
          skills: [
            "Tailwind CSS",
            "SCSS",
            "Design systems",
            "Storybook",
            "Figma",
          ],
        },
        {
          label: "Kwaliteit",
          skills: ["WCAG 2.2", "Core Web Vitals", "Vitest", "Playwright"],
        },
        {
          label: "Commerce & data",
          skills: ["Liquid", "GraphQL", "REST", "Vercel"],
        },
      ],
    },
    process: {
      eyebrow: "Werkwijze",
      title: "Van vraag naar release.",
      steps: [
        {
          title: "Scherp maken",
          text: "Doel, deadline en afhankelijkheden helder krijgen.",
        },
        {
          title: "In stappen bouwen",
          text: "Kleine, reviewbare stukken met ruimte voor feedback.",
        },
        {
          title: "Productieklaar opleveren",
          text: "Testen op snelheid, toegankelijkheid en mobiel. Inclusief overdracht.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Frontend hulp nodig?",
      intro:
        "Vertel me wat je wilt bouwen. Dan kijken we samen naar de aanpak en planning.",
      whatsappLabel: "App Robin",
      copyEmailLabel: "Kopieer e-mail",
      copiedLabel: "E-mail gekopieerd",
      waMessage:
        "Hoi Robin, ik heb een frontend opdracht en wil graag even sparren.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      details: [
        "React / Next.js · Shopify Plus",
        "TypeScript · Design systems",
        "Performance · WCAG 2.2",
      ],
      mailLabel: "Liever mailen?",
      copyErrorLabel:
        "Kopiëren is niet gelukt. Gebruik de e-maillink hiernaast of hieronder.",
    },
    footer: "Senior freelance frontend developer",
  },
  en: {
    nav: [
      {
        label: "Profile",
        href: "#profile",
      },
      {
        label: "Work",
        href: "#work",
      },
      {
        label: "Stack",
        href: "#stack",
      },
      {
        label: "Contact",
        href: "#contact",
      },
    ],
    languageSwitchLabel: "Schakel naar Nederlands",
    skipLink: "Skip to content",
    hero: {
      eyebrow: "Senior freelance React / Next.js developer",
      title: "Features live in\ndays, not weeks.",
      intro:
        "I help product and e-commerce teams build faster, with frontend that works well and stays maintainable.",
      location: "Amsterdam",
      availability: "Remote / hybrid",
      primaryCta: "Book a call",
      secondaryCta: "View cases",
      proof: ["Complex frontend", "Clear components", "Shopify"],
      stats: [
        {
          value: "14+",
          label: "teams supported",
        },
        {
          value: "WCAG 2.2",
          label: "Accessible interfaces",
        },
        {
          value: "Shopify Plus",
          label: "Custom storefronts",
        },
      ],
      proofMobile: ["Frontend", "Components", "Shopify"],
    },
    profile: {
      eyebrow: "Profile",
      title: "Build quickly.\nKeep building well.",
      body: "I join product and e-commerce teams that need extra frontend expertise. I turn requirements into working features and a clear component structure.",
      highlights: [
        "Complex flows, clear components.",
        "From business requirements to working software.",
        "Direct collaboration with product, design and backend.",
      ],
    },
    capabilities: [
      {
        icon: "rocket",
        title: "Feature delivery",
        text: "React and Next.js features, from forms to API integrations.",
      },
      {
        icon: "commerce",
        title: "E-commerce",
        text: "Shopify Plus, product filters and custom Liquid development.",
      },
      {
        icon: "system",
        title: "Design systems",
        text: "Components, tokens and documentation for your whole team.",
      },
      {
        icon: "speed",
        title: "Performance & WCAG",
        text: "Fast, accessible interfaces. With keyboard support, too.",
      },
    ],
    work: {
      eyebrow: "Selected work",
      title: "Built with these teams.",
      intro:
        "A selection of product platforms, online stores and accessible interfaces.",
      outcomeLabel: "Outcome",
      scopeLabel: "Scope",
      items: [
        {
          company: "Stroom Mee",
          role: "Senior Freelance Frontend Developer",
          period: "May 2026 – present",
          type: "Product development",
          outcome:
            "A Next.js app built from scratch, with a custom design system and previews for the whole team.",
          scope: ["Component library", "Preview workflows", "CI/CD"],
          stack: ["Next.js", "React", "TypeScript"],
        },
        {
          company: "Fitwinkel",
          role: "Senior Freelance Shopify Developer",
          period: "Jan – Apr 2026",
          type: "Shopify development",
          outcome:
            "A Shopify Plus storefront with better product navigation, filters and comparisons.",
          scope: ["Liquid components", "Product filters", "Metafields"],
          stack: ["Shopify Plus", "JavaScript", "SCSS"],
        },
        {
          company: "Pantyr",
          role: "Freelance Frontend Developer - WCAG 2.2",
          period: "Oct 2025 – Apr 2026",
          type: "Accessibility",
          outcome:
            "More accessible React applications for government and social safety organizations.",
          scope: ["WCAG 2.2", "Focus management", "Component audits"],
          stack: ["React", "TypeScript", "WCAG 2.2"],
        },
        {
          company: "Ampère",
          role: "Senior Freelance React / Next.js Developer",
          period: "Sep 2025 – Apr 2026",
          type: "Frontend development",
          outcome:
            "Logistics dashboards with reusable UI for operational teams.",
          scope: ["Design system", "API integrations", "Dashboards"],
          stack: ["React", "Next.js", "TypeScript"],
        },
        {
          company: "Y.digital",
          role: "Freelance Frontend Developer",
          period: "Feb – Sep 2025",
          type: "Frontend development",
          outcome: "Web platforms with forms, data tables and content flows.",
          scope: ["React components", "GraphQL", "Headless CMS"],
          stack: ["Next.js", "React", "GraphQL"],
        },
        {
          company: "Tournament Software",
          role: "Freelance Frontend Developer",
          period: "Nov 2024 – Sep 2025",
          type: "Frontend development",
          outcome:
            "Tournament and live results interfaces for players and organizers.",
          scope: ["Rankings", "Live results", "UI modernization"],
          stack: ["TypeScript", "React", "JavaScript"],
        },
        {
          company: "WoningNet",
          role: "Front-end Developer",
          period: "Mar 2022 – Dec 2024",
          type: "Frontend development",
          outcome:
            "Accessible search and application flows for social housing.",
          scope: ["Forms", "Search and filtering", "Accessibility"],
          stack: ["JavaScript", "HTML", "CSS"],
        },
        {
          company: "Reliving.nl",
          role: "Freelance Front-end Developer",
          period: "Oct 2023 – Feb 2024",
          type: "Frontend development",
          outcome:
            "Product pages and upload flows for second-hand design furniture.",
          scope: ["Core Web Vitals", "Analytics", "Chatbot frontend"],
          stack: ["Next.js", "React", "Vercel"],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      title: "The tools I build with.",
      intro: "For fast development and frontend your team can maintain.",
      groups: [
        {
          label: "Core",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Vite",
            "Node.js",
          ],
        },
        {
          label: "Interface",
          skills: [
            "Tailwind CSS",
            "SCSS",
            "Design systems",
            "Storybook",
            "Figma",
          ],
        },
        {
          label: "Quality",
          skills: ["WCAG 2.2", "Core Web Vitals", "Vitest", "Playwright"],
        },
        {
          label: "Commerce & data",
          skills: ["Liquid", "GraphQL", "REST", "Vercel"],
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "From requirements to release.",
      steps: [
        {
          title: "Clarify",
          text: "Agree on the goal, deadline and dependencies.",
        },
        {
          title: "Build in steps",
          text: "Small, reviewable changes with room for feedback.",
        },
        {
          title: "Ready for production",
          text: "Test performance, accessibility and mobile layouts. Hand over clearly.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Need a frontend developer?",
      intro:
        "Tell me what you want to build. We’ll work out the approach and timing together.",
      whatsappLabel: "Message Robin",
      copyEmailLabel: "Copy email",
      copiedLabel: "Email copied",
      waMessage: "Hi Robin, I have a frontend project and would like to spar.",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      details: [
        "React / Next.js · Shopify Plus",
        "TypeScript · Design systems",
        "Performance · WCAG 2.2",
      ],
      mailLabel: "Prefer email?",
      copyErrorLabel:
        "Could not copy the address. Please use the email link beside or below this message.",
    },
    footer: "Senior freelance frontend developer",
  },
} as const;
