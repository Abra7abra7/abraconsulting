import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { OrganizationJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";
import { Pricing } from "@/components/pricing";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ABRA AI - AI Autonomous Business & MCP Protocol Solutions",
  description: "ABRA AI delivers cutting-edge autonomous business solutions using MCP protocol for intelligent decision making in Slovakia and Central Europe",
  keywords: [
    "AI autonomous business", 
    "MCP protocol", 
    "decision making",
    "Slovakia AI solutions",
    "Central Europe business automation",
    "autonomous AI",
    "intelligent decision support"
  ],
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <ServiceJsonLd />
      <LocalBusinessJsonLd />
      <main className="">
        <Hero />
       
        <Features />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}
