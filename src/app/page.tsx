import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/server/auth";

import { LoginForm } from "./_components/login-form";

export default async function LoginPage() {
  const session = await auth();

  if(!!session) {
    return redirect("/dashboard");
  }

  return (
    <div
      className="h-screen w-screen flex items-center justify-end p-28 bg-[url('/assets/gatinho.png')] bg-cover"
    >
      <LoginForm/>
    </div>
  );
}
