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
        <section className="py-8 px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI Autonomous Business Solutions with MCP Protocol
          </h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            ABRA AI delivers cutting-edge autonomous business solutions using MCP protocol for intelligent decision making.
            Serving Slovakia and Central Europe with AI-powered business automation that transforms operations and productivity.
          </p>
        </section>
        <Features />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}
