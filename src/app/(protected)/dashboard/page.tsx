import { format } from "date-fns";
import { PencilIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

import { getPets } from "@/server/actions/pets";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";

import { cn } from "@/lib/utils";
import { DeletePetButton } from "./delete-pet-button";

const HEALTH_BG = {
  EXCELENT: "bg-primary",
  AVARAGE: "bg-yellow-500",
  BAD: "bg-red-500"
} as const;

export default async function DashboardPage() {
  const petsList = await getPets();

  return (
    <div className="w-full grid gap-6 md:px-12">
      <div className="w-full">
        <Button
          asChild
          variant={"outline"}
          className="h-16 md:h-24 flex items-center justify-center gap-4 p-4 text-lg text-primary font-bold hover:text-primary bg-hidden border-dashed border-primary border-4 hover:border-solid rounded-lg"
        >
          <Link
            href="/dashboard/pet/new"
          >
            Adicionar Pet
            <PlusCircle />
          </Link>
        </Button>
      </div>
      {petsList.length === 0
        ?
        <div>
          Não há pets cadastrados
        </div>
        :
        <>
          {petsList.map((pet) => (
            <div
              key={pet.id}
              className="h-16 md:h-24 flex items-center justify-between space-x-4 p-4 rounded-lg bg-primary-background"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={pet.image ?? undefined} alt="pet-image" />
                  <AvatarFallback>N/I</AvatarFallback>
                </Avatar>
                <div className="text-sm font-medium leading-none">
                  <h3 className="text-base font-bold text-gray-100">
                    {pet.name}
                  </h3>
                  <p className="text-sm font-normal text-gray-300 dark:text-gray-400">
                    {format(pet.birthDate, "dd/MM/yyyy")}
                  </p>
                </div>
                <div
                  className={cn("h-4 w-4 rounded-full", HEALTH_BG[pet.health])}
                >
                </div>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href={`/dashboard/pet/${pet.id}/edit`}>
                    <PencilIcon />
                  </Link>
                </Button>
                <DeletePetButton id={pet.id} />
              </div>
            </div>
          ))
          }
        </>
      }
    </div >
  );
}
