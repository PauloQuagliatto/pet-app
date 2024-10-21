import { redirect } from "next/navigation";

import { auth } from "@/server/auth";
import { LayoutProps } from "@/@types/LayoutProps";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Header />
      <main className="flex flex-col items-center flex-1 w-full px-4 py-8">
      {children}
      </main>
      <Footer />
    </div>
  );
}
