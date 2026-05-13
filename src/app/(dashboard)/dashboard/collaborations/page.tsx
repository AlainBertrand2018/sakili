import { HandshakeDashboard } from "@/features/collaborations/handshake-dashboard";

export const metadata = {
  title: "Handshakes",
  description: "Manage your institutional collaborations on SAKILI.",
};

export default function Page() {
  return <HandshakeDashboard />;
}
