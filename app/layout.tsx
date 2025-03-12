import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ABRA AI | Autonomous Business Robotic Assistant",
    template: "%s | ABRA AI"
  },
  description:
    "ABRA AI is an autonomous AI-powered assistant designed for businesses to automate repetitive tasks, manage data efficiently, and support decision-making, thereby improving operational efficiency and productivity.",
  keywords: [
    "AI assistant", 
    "business automation", 
    "robotic assistant", 
    "productivity tools", 
    "AI for business", 
    "data management", 
    "decision support", 
    "operational efficiency",
    "artificial intelligence",
    "business solutions",
    "workflow automation",
    "enterprise AI"
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
    },
  },
  openGraph: {
    title: "ABRA AI | Autonomous Business Robotic Assistant",
    description: "AI-powered assistant designed for businesses to automate tasks, manage data, and support decision-making",
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
    title: "ABRA AI | Autonomous Business Robotic Assistant",
    description: "AI-powered assistant designed for businesses to automate tasks, manage data, and support decision-making",
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
    google: "google-site-verification-code", // Replace with actual verification code when available
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
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
