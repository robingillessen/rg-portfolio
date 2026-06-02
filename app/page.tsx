"use client";

import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  Mail,
  Rocket,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import { Locale, portfolio, profile } from "@/data";

const capabilityIcons = {
  rocket: Rocket,
  commerce: ShoppingBag,
  system: Layers3,
  speed: Gauge,
};

const skillIcons: Record<string, string> = {
  React: "/re.svg",
  "Next.js": "/next.svg",
  TypeScript: "/ts.svg",
  JavaScript: "/js.png",
  "Node.js": "/nodejs.png",
  "Tailwind CSS": "/tail.svg",
  SCSS: "/sass.png",
  Liquid: "/badges/shopify.svg",
  "Design Systems": "/badges/storybook.svg",
  Storybook: "/badges/storybook.svg",
  Figma: "/badges/figma.svg",
  "WCAG 2.2": "/badges/accessibility.svg",
  ARIA: "/badges/accessibility.svg",
  Accessibility: "/badges/accessibility.svg",
  "Core Web Vitals": "/badges/vitals.svg",
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
            loading="eager"
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
  const t = portfolio[locale];
  const nextLocale: Locale = locale === "nl" ? "en" : "nl";
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    t.contact.mailSubject
  )}`;
  const allSkills = useMemo(
    () => t.stack.groups.flatMap((group) => group.skills),
    [t.stack.groups]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    let frame = 0;

    const updateScrollVars = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toFixed(4)
      );
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY.toFixed(0)}px`
      );
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScrollVars);
      }
    };

    updateScrollVars();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#content">
        {t.skipLink}
      </a>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/90 px-3 py-2 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
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
                Frontend delivery specialist
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
              href={mailHref}
              aria-label={t.hero.primaryCta}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink transition hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:hidden"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
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
              href={mailHref}
              className="hidden h-10 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:inline-flex"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
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
                <a href={mailHref} className="button-primary group">
                  <Mail className="h-4 w-4" aria-hidden="true" />
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
                <div className="release-line release-line-primary" />
                <div className="release-line release-line-secondary" />
                <div className="release-line release-line-tertiary" />

                {[
                  ["ship", "01"],
                  ["measure", "02"],
                  ["scale", "03"],
                ].map(([label, count], index) => (
                  <div
                    key={label}
                    className={`release-node release-node-${label}`}
                    style={{ "--node-index": index } as CSSProperties}
                  >
                    <i>{count}</i>
                    <span>{label}</span>
                  </div>
                ))}

                <div className="release-spark release-spark-a" />
                <div className="release-spark release-spark-b" />
                <div className="release-spark release-spark-c" />
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
                {[...allSkills, ...allSkills].map((skill, index) => (
                  <SkillBadge key={`${skill}-${index}`} skill={skill} />
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={mailHref} className="button-light group">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t.contact.emailLabel}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
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
