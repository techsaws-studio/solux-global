import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.soluxglobal.com";

export const defaultMetadata: Metadata = {
  title: "Medical Billing Company USA | Solux Global",
  description:
    "Solux Global provides expert medical billing & coding services in the USA. Boost revenue, reduce denials, and streamline your practice with HIPAA-compliant billing.",

  applicationName: "Solux Global",
  creator: "TechSaws",
  generator: "Next.js",
  keywords: [
    "medical billing company USA",
    "medical billing services",
    "medical coding services",
    "revenue cycle management",
    "RCM services USA",
    "HIPAA compliant billing",
    "healthcare billing solutions",
    "medical claims management",
    "practice management services",
    "Solux Global",
    "medical billing outsourcing",
    "denial management services",
    "medical billing experts",
    "medical billing for clinics",
    "medical billing for hospitals",
    "medical billing for physicians",
    "medical billing and coding company",
    "best medical billing company USA",
    "medical billing automation",
    "healthcare revenue optimization",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo.png",
        sizes: "834x408",
      },
      { rel: "icon", type: "image/svg+xml", url: "/favicons/logo.svg" },
      { rel: "icon", type: "image/x-icon", url: "/favicons/favicon.ico" },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/social/og-default.png`,
    title: "Medical Billing Company USA | Solux Global",
    description:
      "Solux Global provides expert medical billing & coding services in the USA. Boost revenue, reduce denials, and streamline your practice with HIPAA-compliant billing.",
    siteName: "Solux Global",
    images: [
      {
        url: `${BASE_URL}/social/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Medical Billing Company USA | Solux Global",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Billing Company USA | Solux Global",
    description:
      "Solux Global provides expert medical billing & coding services in the USA. Boost revenue, reduce denials, and streamline your practice with HIPAA-compliant billing.",
    images: [`${BASE_URL}/social/twitter-preview.png`],
    creator: "@TechSaws",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}
