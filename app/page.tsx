"use client";

import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Gauge,
  Layers3,
  Rocket,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import type { SVGProps } from "react";
import { useEffect, useMemo, useState } from "react";

import { Locale, portfolio, profile } from "@/data";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.4-8.24 8.4Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

const capabilityIcons = {
  rocket: Rocket,
  commerce: ShoppingBag,
  system: Layers3,
  speed: Gauge,
};

const skillIcons: Record<string, string> = {
  React: "/re.svg",
  "Next.js": "/badges/nextjs-mark.svg",
  TypeScript: "/ts.svg",
  JavaScript: "/js.png",
  "Node.js": "/nodejs.png",
  "Tailwind CSS": "/tail.svg",
  SCSS: "/sass.png",
  Liquid: "/badges/shopify.svg",
  "Design Systems": "/badges/design-systems.svg",
  Storybook: "/badges/storybook.svg",
  Figma: "/badges/figma.svg",
  "WCAG 2.2": "/badges/accessibility.svg",
  Accessibility: "/badges/accessibility.svg",
  "Core Web Vitals": "/badges/vitals.svg",
  Vite: "/badges/vite.svg",
  Vitest: "/badges/vitest.svg",
  Playwright: "/badges/playwright.svg",
  GraphQL: "/badges/graphql.svg",
  REST: "/badges/api.svg",
  Vercel: "/badges/vercel.svg",
  "CI/CD": "/badges/cicd.svg",
  UX: "/badges/figma.svg",
  "Frontend Tooling": "/badges/vite.svg",
  HTML: "/badges/html5.svg",
  CSS: "/badges/css.svg",
  Analytics: "/badges/analytics.svg",
};

function SkillBadge({
  skill,
  compact = false,
  strong = false,
}: {
  skill: string;
  compact?: boolean;
  strong?: boolean;
}) {
  const icon = skillIcons[skill];

  return (
    <span
      className={[
        "tech-badge legacy-tech-badge",
        icon ? "has-icon" : "text-only",
        compact ? "compact" : "",
        strong ? "strong" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={skill}
      title={skill}
    >
      {icon ? (
        <span className="legacy-icon-wrap" aria-hidden="true">
          <Image
            src={icon}
            alt=""
            width={22}
            height={22}
            loading="lazy"
            unoptimized
          />
        </span>
      ) : null}
      <span className="legacy-badge-label">{skill}</span>
    </span>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("nl");
  const [copied, setCopied] = useState(false);
  const t = portfolio[locale];
  const nextLocale: Locale = locale === "nl" ? "en" : "nl";
  const whatsappHref = `https://wa.me/31680229628?text=${encodeURIComponent(
    t.contact.waMessage
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  const allSkills = useMemo(
    () => t.stack.groups.flatMap((group) => group.skills),
    [t.stack.groups]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#content">
        {t.skipLink}
      </a>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/95 px-3 py-2 text-white shadow-2xl shadow-black/20"
          aria-label={locale === "nl" ? "Hoofdnavigatie" : "Main navigation"}
        >
          <a
            href="#content"
            className="group flex items-center gap-3 rounded-full pr-3"
          >
            <Image
              src="/rg-logo.png"
              width={42}
              height={42}
              alt="RG Development"
              priority
              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 transition duration-300 group-hover:rotate-3 group-hover:ring-brand"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold tracking-tight">
                {profile.name}
              </span>
              <span className="block text-xs text-white/60">
                {locale === "nl"
                  ? "Features in dagen, niet weken"
                  : "Features in days, not weeks"}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label={t.hero.primaryCta}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink transition hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:hidden"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={t.languageSwitchLabel}
              onClick={() => setLocale(nextLocale)}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 text-sm font-semibold text-white transition hover:border-brand/70 hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span aria-hidden="true">
                {nextLocale === "en" ? "🇬🇧" : "🇳🇱"}
              </span>
              {nextLocale.toUpperCase()}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.hero.primaryCta}
            </a>
          </div>
        </nav>
      </header>

      <main id="content">
        <section className="hero-section relative overflow-hidden px-4 pt-32 sm:px-6 lg:min-h-screen lg:pt-40">
          <div className="hero-grid mx-auto grid max-w-7xl gap-10 pb-14 pt-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center lg:pb-20">
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow mb-6 inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {t.hero.eyebrow}
              </p>
              <h1 className="hero-title text-5xl font-semibold leading-[0.96] tracking-normal text-ink sm:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {t.hero.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary group"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.hero.primaryCta}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a href="#work" className="button-secondary group">
                  {t.hero.secondaryCta}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <ul className="mt-9 grid gap-3 text-sm text-ink/80 sm:grid-cols-3">
                {t.hero.proof.map((item) => (
                  <li key={item} className="proof-item">
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="release-visual" aria-hidden="true">
              <div className="release-field">
                <div className="release-orb release-orb-a" />
                <div className="release-orb release-orb-b" />

                <svg
                  className="release-connectors"
                  viewBox="0 0 360 512"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="conn-gradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--brand-dark)" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="var(--brand)" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="var(--brand-dark)" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>

                  {/* Requirement -> Build */}
                  <path id="conn-1" d="M 95 120 C 165 150, 205 205, 252 250" />
                  {/* Build -> Ship */}
                  <path id="conn-2" d="M 252 250 C 205 310, 195 350, 140 400" />

                  <path
                    className="connector-base"
                    d="M 95 120 C 165 150, 205 205, 252 250"
                  />
                  <path
                    className="connector-base"
                    d="M 252 250 C 205 310, 195 350, 140 400"
                  />

                  <path
                    className="connector-flow"
                    d="M 95 120 C 165 150, 205 205, 252 250"
                  />
                  <path
                    className="connector-flow"
                    d="M 252 250 C 205 310, 195 350, 140 400"
                  />

                  <circle className="connector-dot" cx="95" cy="120" r="5" />
                  <circle className="connector-dot" cx="252" cy="250" r="5" />
                  <circle className="connector-dot" cx="140" cy="400" r="5" />
                </svg>

                {[
                  ["requirement", "01", "Requirement"],
                  ["build", "02", "Build"],
                  ["ship", "03", "Ship"],
                ].map(([key, count, label]) => (
                  <div
                    key={key}
                    className={`release-node release-node-${key}`}
                  >
                    <i>{count}</i>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl pb-10">
            <div className="stat-strip">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
              <div className="hidden md:block">
                <strong>{t.hero.location}</strong>
                <span>{t.hero.availability}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="section-pad border-y border-line/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="sticky-copy">
              <p className="section-kicker">{t.profile.eyebrow}</p>
              <h2 className="section-title">{t.profile.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                {t.profile.body}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="profile-panel">
                {t.profile.highlights.map((item) => (
                  <div key={item} className="highlight-row">
                    <span />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {t.capabilities.map((capability) => {
                  const Icon =
                    capabilityIcons[
                      capability.icon as keyof typeof capabilityIcons
                    ];

                  return (
                    <article key={capability.title} className="capability-card">
                      <div className="icon-orb">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3>{capability.title}</h3>
                      <p>{capability.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="section-head">
              <div>
                <p className="section-kicker">{t.work.eyebrow}</p>
                <h2 className="section-title">{t.work.title}</h2>
              </div>
              <p>{t.work.intro}</p>
            </div>

            <div className="case-grid mt-12">
              {t.work.items.map((project, index) => (
                <article key={`${project.company}-${project.period}`} className="case-card">
                  <div className="case-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="case-meta">
                    <span>{project.type}</span>
                    <span>{project.period}</span>
                  </div>
                  <h3>{project.company}</h3>
                  <p className="case-role">{project.role}</p>
                  <div className="case-copy">
                    <span>{t.work.outcomeLabel}</span>
                    <p>{project.outcome}</p>
                  </div>
                  <div className="case-copy">
                    <span>{t.work.scopeLabel}</span>
                    <ul>
                      {project.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="legacy-badge-strip"
                    aria-label={project.stack.join(", ")}
                  >
                    {project.stack.map((skill) => (
                      <SkillBadge key={skill} skill={skill} compact />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="stack-section border-y border-line/70">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="section-head">
              <div>
                <p className="section-kicker">{t.stack.eyebrow}</p>
                <h2 className="section-title">{t.stack.title}</h2>
              </div>
              <p>{t.stack.intro}</p>
            </div>

            <div className="skill-marquee mt-10" aria-hidden="true">
              <div>
                {allSkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.stack.groups.map((group) => (
                <article key={group.label} className="stack-card">
                  <h3>{group.label}</h3>
                  <div className="badge-wrap legacy-badge-grid">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} strong />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="process-panel">
              <div>
                <p className="section-kicker">{t.process.eyebrow}</p>
                <h2 className="section-title">{t.process.title}</h2>
              </div>
              <div className="process-grid">
                {t.process.steps.map((step, index) => (
                  <article key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:py-24">
            <div>
              <p className="section-kicker inverted">{t.contact.eyebrow}</p>
              <h2 className="section-title inverted">{t.contact.title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                {t.contact.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-light group"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.contact.whatsappLabel}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <button type="button" onClick={copyEmail} className="button-dark">
                  {copied ? (
                    <Check className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? t.contact.copiedLabel : t.contact.copyEmailLabel}
                </button>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-dark">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {t.contact.linkedinLabel}
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="button-dark">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  {t.contact.githubLabel}
                </a>
              </div>
            </div>

            <aside className="contact-card">
              <Code2 className="h-6 w-6 text-brand" aria-hidden="true" />
              <div className="mt-6 flex flex-wrap gap-2">
                {t.contact.details.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 bg-background px-4 py-7 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
