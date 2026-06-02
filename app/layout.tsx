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
    "Ik help product- en e-commerce teams features in dagen shippen in plaats van weken — zonder in te leveren op UX, stabiliteit of onderhoudbaarheid. Senior freelance React, Next.js en Shopify developer.",
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
      "Features in dagen live in plaats van weken — complexe frontendflows, heldere componentstructuur en bouwpatronen, zonder in te leveren op UX, stabiliteit of onderhoudbaarheid.",
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
      "Features in dagen shippen in plaats van weken — zonder in te leveren op UX, stabiliteit of onderhoudbaarheid.",
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
