import type { Metadata, Viewport } from "next";
import { Fraunces, Spline_Sans } from "next/font/google";

import "./globals.css";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://robin-gillessen.nl"),
  title: {
    default: "Robin Gillessen | Senior Freelance Frontend Developer",
    template: "%s | Robin Gillessen",
  },
  description:
    "Senior freelance React, Next.js en TypeScript developer voor product- en e-commerce teams die frontendverbeteringen binnen strakke deadlines naar productie willen brengen.",
  keywords: [
    "freelance frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Shopify Plus developer",
    "design systems",
    "frontend performance",
    "WCAG accessibility",
    "Amsterdam",
  ],
  authors: [{ name: "Robin Gillessen" }],
  creator: "Robin Gillessen",
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
      en: "/",
    },
  },
  openGraph: {
    title: "Robin Gillessen | Senior Freelance Frontend Developer",
    description:
      "React, Next.js, TypeScript en Shopify front-end development voor teams die snelheid, kwaliteit en een rustige samenwerking nodig hebben.",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/rg-logo.png",
        width: 512,
        height: 512,
        alt: "RG Development logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Robin Gillessen | Senior Freelance Frontend Developer",
    description:
      "Senior freelance React, Next.js en TypeScript developer voor product- en e-commerce teams.",
    images: ["/rg-logo.png"],
  },
  icons: {
    icon: "/rg-logo.png",
    apple: "/rg-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#00f2bd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${splineSans.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
