import { PrivacyPolicy } from "@/components/privacy-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ABRA AI Consulting",
  description:
    "Our privacy policy outlines how we collect, use, and protect your personal information when you use our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="">
      <PrivacyPolicy />
    </main>
  );
}
