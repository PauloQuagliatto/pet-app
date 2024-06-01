import { redirect } from "next/navigation";

import { auth } from "@/server/auth";
import { LayoutProps } from "@/@types/LayoutProps";

import { Header } from "@/app/_components/header";
import { Footer } from "@/app/_components/footer";

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
