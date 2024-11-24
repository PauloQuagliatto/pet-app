import { notFound } from "next/navigation";

import { getPet } from "@/server/actions/pets";
import { PetForm } from "@/components/pet-form";


type EditPetPageProps = {
  params: {
    id: string;
  }
}

export default async function EditPetPage({ params }: EditPetPageProps) {
  const pet = await getPet(params.id);

  if (!pet) {
    notFound();
  }

  return (
    <PetForm pet={pet} />
  );
}
