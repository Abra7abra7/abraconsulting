import { TermsOfService } from "@/components/terms-of-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ABRA AI Consulting",
  description:
    "Our terms of service outline the rules, guidelines, and legal agreements between you and ABRA AI Consulting.",
};

export default function TermsOfServicePage() {
  return (
    <main className="">
      <TermsOfService />
    </main>
  );
}
