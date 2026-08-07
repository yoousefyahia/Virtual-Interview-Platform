import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://vuplatformzikolaa.duckdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Virtual Interview Platform",

  title: {
    default: "Virtual Interview Platform",
    template: "%s | Virtual Interview Platform",
  },

  description:
    "Practice, schedule, and conduct virtual interviews with an intuitive platform designed for candidates and recruiters.",

  keywords: [
    "Virtual Interview",
    "Interview Platform",
    "Mock Interview",
    "Interview Practice",
    "AI Interview",
    "Online Interview",
    "Recruitment",
    "Hiring",
    "HR",
    "Candidates",
    "Interview Preparation",
  ],

  authors: [
    { name: "Yousef Yahia" },
    { name: "Ahmed Abbas" },
  ],

  creator: "Yousef Yahia",
  publisher: "Virtual Interview Platform",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Virtual Interview Platform",
    title: "Virtual Interview Platform",
    description:
      "Practice, schedule, and conduct virtual interviews online.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtual Interview Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Virtual Interview Platform",
    description:
      "Practice, schedule, and conduct virtual interviews online.",
    images: ["/og-image.png"],
  },

  appleWebApp: {
    capable: true,
    title: "Virtual Interview Platform",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className={`${inter.className} font-sans`}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}