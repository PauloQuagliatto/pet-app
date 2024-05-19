import { redirect } from "next/navigation";

import { auth } from "@/server/auth";
import { LayoutProps } from "@/@types/LayoutProps";

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
