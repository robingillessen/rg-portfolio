"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Gauge,
  Grid2X2,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Locale, portfolio, profile } from "@/data";

const capabilityIcons = {
  rocket: Code2,
  commerce: ShoppingBag,
  system: Grid2X2,
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
  "Design systems": "/badges/design-systems.svg",
  Storybook: "/badges/storybook.svg",
  Figma: "/badges/figma.svg",
  "WCAG 2.2": "/badges/accessibility.svg",
  "Core Web Vitals": "/badges/vitals.svg",
  Vite: "/badges/vite.svg",
  Vitest: "/badges/vitest.svg",
  Playwright: "/badges/playwright.svg",
  GraphQL: "/badges/graphql.svg",
  REST: "/badges/api.svg",
  Vercel: "/badges/vercel.svg",
};

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function ReleaseDiagram() {
  const route =
    "M67 111V178Q67 214 104 214H286Q322 214 322 251V310Q322 347 287 347H188";
  return (
    <div className="release-diagram" aria-hidden="true">
      <svg viewBox="0 0 484 466" fill="none">
        <path d={route} stroke="#00F2BD" strokeWidth="2" />
        <path
          d={route}
          stroke="#FFFFFF"
          strokeOpacity="0.14"
          strokeWidth="16"
        />
        <circle cx="67" cy="111" r="6" fill="#00F2BD" />
        <circle cx="322" cy="252" r="6" fill="#00F2BD" />
        <circle cx="188" cy="347" r="6" fill="#00F2BD" />
        <path
          d="M30 52V30H52M432 30H454V52M30 414V436H52M432 436H454V414"
          stroke="#62675F"
        />
      </svg>
      {[
        ["requirement", "01", "Requirement"],
        ["build", "02", "Build"],
        ["ship", "03", "Ship"],
      ].map(([key, count, label]) => (
        <div className={`release-step release-step-${key}`} key={key}>
          <span>{count}</span>
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("nl");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = portfolio[locale];
  const nextLocale: Locale = locale === "nl" ? "en" : "nl";
  const whatsappHref = `https://wa.me/31680229628?text=${encodeURIComponent(t.contact.waMessage)}`;
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
  const copyEmail = async () => {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
      copyTimer.current = setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      setCopyState("error");
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        {t.skipLink}
      </a>
      <header className="site-header">
        <nav
          className="site-nav"
          aria-label={locale === "nl" ? "Hoofdnavigatie" : "Main navigation"}
        >
          <a className="brand-link" href="#content">
            <Image src="/rg-logo.png" width={36} height={36} alt="" priority />
            <span>{profile.name}</span>
          </a>
          <div className="nav-links">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="locale-button"
              type="button"
              aria-label={t.languageSwitchLabel}
              onClick={() => setLocale(nextLocale)}
            >
              {nextLocale.toUpperCase()}
            </button>
            <a
              className="button button-green nav-cta"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.hero.primaryCta}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>
      <main id="content" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-introduction">
                <p className="hero-eyebrow">{t.hero.eyebrow}</p>
                <h1 className="hero-title" id="hero-title">
                  {t.hero.title}
                </h1>
                <p className="hero-intro">{t.hero.intro}</p>
              </div>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.hero.primaryCta}
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="button button-secondary" href="#work">
                  {t.hero.secondaryCta}
                  <ArrowDown aria-hidden="true" />
                </a>
              </div>
              <ul className="hero-expertise">
                {t.hero.proof.map((item, i) => (
                  <li key={item}>
                    <span className="expertise-desktop">{item}</span>
                    <span className="expertise-mobile">
                      {t.hero.proofMobile[i]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ReleaseDiagram />
          </div>
          <dl className="stat-strip">
            {t.hero.stats.map((stat, i) => (
              <div
                className={i === 0 ? "stat-count" : undefined}
                key={stat.label}
              >
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
            <div>
              <dt>{t.hero.location}</dt>
              <dd>{t.hero.availability}</dd>
            </div>
          </dl>
        </section>
        <section className="section section-muted" id="profile">
          <div className="container profile-grid">
            <div className="profile-intro">
              <SectionHeading
                eyebrow={t.profile.eyebrow}
                title={t.profile.title}
              />
              <p>{t.profile.body}</p>
            </div>
            <div className="profile-expertise">
              <ul className="profile-highlights">
                {t.profile.highlights.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="capability-grid">
                {t.capabilities.map((capability) => {
                  const Icon = capabilityIcons[capability.icon];
                  return (
                    <article className="capability-card" key={capability.title}>
                      <Icon aria-hidden="true" />
                      <h3>{capability.title}</h3>
                      <p>{capability.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="work">
          <div className="container">
            <SectionHeading
              eyebrow={t.work.eyebrow}
              title={t.work.title}
              intro={t.work.intro}
            />
            <div className="case-grid">
              {t.work.items.map((project, i) => (
                <article className="case-card" key={project.company}>
                  <div className="case-meta">
                    <span>{project.type}</span>
                    <span>{project.period}</span>
                  </div>
                  <div className="case-heading">
                    <h3>{project.company}</h3>
                    <span aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="case-outcome">{project.outcome}</p>
                  <p className="case-scope">{project.scope.join(" · ")}</p>
                  <p className="case-stack">{project.stack.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section section-muted stack-section" id="stack">
          <div className="container">
            <SectionHeading
              eyebrow={t.stack.eyebrow}
              title={t.stack.title}
              intro={t.stack.intro}
            />
            <div className="stack-grid">
              {t.stack.groups.map((group) => (
                <article className="stack-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <span className="skill-icon">
                          <Image
                            src={skillIcons[skill]}
                            alt=""
                            width={18}
                            height={18}
                            unoptimized
                          />
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow={t.process.eyebrow}
              title={t.process.title}
            />
            <ol className="process-grid">
              {t.process.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="process-number" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-intro">
              <p className="section-kicker">{t.contact.eyebrow}</p>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="contact-description">{t.contact.intro}</p>
              <div className="contact-actions">
                <a
                  className="button button-green"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.contact.whatsappLabel}
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <button
                  className="button button-outline"
                  type="button"
                  onClick={copyEmail}
                >
                  {copyState === "copied"
                    ? t.contact.copiedLabel
                    : t.contact.copyEmailLabel}
                  {copyState === "copied" ? (
                    <Check aria-hidden="true" />
                  ) : (
                    <Copy aria-hidden="true" />
                  )}
                </button>
              </div>
              <p
                className={copyState === "error" ? "copy-error" : "sr-only"}
                role="status"
              >
                {copyState === "copied"
                  ? t.contact.copiedLabel
                  : copyState === "error"
                    ? t.contact.copyErrorLabel
                    : ""}
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-email">
                <p>{t.contact.mailLabel}</p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <ul className="contact-services">
                {t.contact.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
