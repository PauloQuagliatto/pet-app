import { redirect } from "next/navigation";

import { auth } from "@/server/auth";

import { CreateUserForm } from "@/components/create-user-form";


export default async function SignUpPage() {

  const session = await auth();

  if(!!session) {
    return redirect("/dashboard");
  }

  return (
    <div
      className="h-screen w-screen flex items-center justify-start p-28 bg-[url('/assets/gatinho.png')] bg-cover"
    >
      <CreateUserForm />
    </div>
  );
}


