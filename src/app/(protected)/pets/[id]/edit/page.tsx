import { notFound } from "next/navigation";

import { getPet } from "@/server/actions/pets";

import { PetForm } from "@/components/pet-form";

type EditPetPageProps = {
  params: {
    id: string;
  }
}

export default async function EditPetPage({
  params: {
    id
  }
}: EditPetPageProps) {
  const pet = await getPet(id);

  if (!pet) {
    notFound();
  }

  return (
    <div className="w-full md:w-[80%] lg:w-[60%]">
      <PetForm
        pet={{
          ...pet,
          id: id
        }}
      />
    </div>
  )
}
