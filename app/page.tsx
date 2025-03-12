import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { OrganizationJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { Pricing } from "@/components/pricing";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ABRA AI | Home",
  description: "ABRA AI - Autonomous Business Robotic Assistant for efficient task automation and data management",
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <ServiceJsonLd />
      <main className="">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}
