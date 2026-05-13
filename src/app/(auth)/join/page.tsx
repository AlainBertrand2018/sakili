import { redirect } from "next/navigation";

export const metadata = {
  title: "Join SAKILI",
  description: "Join the SAKILI AI ecosystem and connect with verified AI organizations across Africa.",
};

export default function JoinPage() {
  redirect("/onboarding");
}
