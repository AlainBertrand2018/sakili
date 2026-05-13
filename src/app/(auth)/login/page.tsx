import { LoginPage } from "@/features/auth/login-page";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata = buildMetadata(pages.login);

export default function Page() {
  return <LoginPage />;
}
