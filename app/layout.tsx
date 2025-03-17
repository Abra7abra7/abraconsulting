import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";
import { Analytics } from "@vercel/analytics/react"
import { AptabaseProvider } from '@aptabase/react';
import Script from 'next/script';

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: "ABRA AI | Autonomous Business AI & MCP Protocol Solutions",
    template: "%s | ABRA AI"
  },
  description:
    "ABRA AI delivers cutting-edge autonomous business solutions using MCP protocol for intelligent decision making. Serving Slovakia and Central Europe with AI-powered business automation that transforms operations and productivity.",
  keywords: [
    "AI autonomous business", 
    "MCP protocol", 
    "decision making",
    "business automation", 
    "AI for business", 
    "Slovakia AI solutions",
    "Central Europe business automation",
    "autonomous AI",
    "intelligent decision support", 
    "operational efficiency",
    "artificial intelligence",
    "business solutions",
    "workflow automation",
    "enterprise AI",
    "AI consulting Slovakia"
  ],
  authors: [{ name: "ABRA AI", url: "https://www.abraconsulting.xyz" }],
  creator: "ABRA AI",
  publisher: "ABRA AI",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://www.abraconsulting.xyz"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'sk-SK': '/sk-SK',
      'cs-CZ': '/cs-CZ',
      'hu-HU': '/hu-HU',
      'pl-PL': '/pl-PL',
    },
  },
  openGraph: {
    title: "ABRA AI | Autonomous Business AI & MCP Protocol Solutions",
    description: "Leading AI autonomous business solutions with MCP protocol for intelligent decision making in Slovakia and Central Europe",
    url: "https://www.abraconsulting.xyz",
    siteName: "ABRA AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ABRA AI - Autonomous Business Robotic Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABRA AI | Autonomous Business AI & MCP Protocol Solutions",
    description: "Leading AI autonomous business solutions with MCP protocol for intelligent decision making in Slovakia and Central Europe",
    images: ["/og-image.jpg"],
    creator: "@abraai",
    site: "@abraai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // TODO: Replace with actual verification code from Google Search Console
    // Note: For other search engines like Yandex and Bing, add meta tags in the head section
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional verification meta tags for other search engines */}
        <meta name="yandex-verification" content="yandex-verification-code" /> {/* TODO: Replace with actual code */}
        <meta name="msvalidate.01" content="bing-verification-code" /> {/* TODO: Replace with actual code */}
        
        {/* Preconnect to important domains to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon tags for better cross-platform support */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <AptabaseProvider appKey="A-EU-2774041550">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
          {/* Load analytics with strategy="lazyOnload" to improve performance */}
          <Script
            strategy="lazyOnload"
            id="analytics-script"
          >
            {`
              // Initialize analytics scripts here
              console.log('Analytics loaded');
            `}
          </Script>
          <Analytics/>
        </AptabaseProvider>
      </body>
    </html>
  );
}
