import { CookiePolicy } from "@/components/cookie-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ABRA AI Consulting",
  description:
    "Our cookie policy explains how we use cookies and similar technologies on our website and the options you have to control them.",
};

export default function CookiePolicyPage() {
  return (
    <main className="">
      <CookiePolicy />
    </main>
  );
}
