import { CreateUserForm } from "../_components/create-user-form";


export default function SignUpPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('/assets/doguinho.png')] bg-cover">
      <CreateUserForm />
    </div>
  );
}


