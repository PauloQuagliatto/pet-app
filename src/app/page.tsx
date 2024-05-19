import Image from "next/image";

import { LoginForm } from "./_components/login-form";

export default function Component() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-end p-28 bg-[url('/assets/gatinho.png')] bg-cover"
    >
      <LoginForm/>
    </div>
  );
}
