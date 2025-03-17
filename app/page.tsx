import { Pricing } from "@/components/pricing";
import { Metadata } from "next";
import Image from "next/image";
import { OrganizationJsonLd, ServiceJsonLd, LocalBusinessJsonLd } from "@/components/json-ld";
import dynamic from "next/dynamic";

// Dynamic imports for heavy components
const DynamicHero = dynamic(() => import("@/components/hero").then(mod => ({ default: mod.Hero })), {
  ssr: true
});

const DynamicFeatures = dynamic(() => import("@/components/features").then(mod => ({ default: mod.Features })), {
  ssr: true
});

const DynamicCTA = dynamic(() => import("@/components/cta").then(mod => ({ default: mod.CTA })), {
  ssr: false
});

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
        <DynamicHero />
       
        <DynamicFeatures />
        <Pricing />
        <DynamicCTA />
      </main>
    </>
  );
}
