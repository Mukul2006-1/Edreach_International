import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Edreach International — Your Bridge to India. Built to Last.",
    template: "%s | Edreach International",
  },
  description:
    "India's dedicated end-to-end partnership firm for global institutions. Education consulting, training programs, R&D partnerships, and legal advisory.",
  keywords: ["India partnership", "foreign institution India", "education consulting India"],
  openGraph: {
    type: "website", locale: "en_US", url: "https://bridgeindia.com",
    siteName: "Edreach International",
    title: "Edreach International — Your Bridge to India. Built to Last.",
    description: "End-to-end partnership services for global institutions entering India.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/EdreachLogo_website_SVG.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-base text-ink-900 font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
