import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ABRA AI Consulting",
  description:
    "Log in to your ABRA AI account to access our AI-powered business assistant and automation tools.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
