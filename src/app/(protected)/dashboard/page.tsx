import { format } from "date-fns";
import Link from "next/link";
import { PencilIcon, TrashIcon } from "lucide-react";

import { getPets } from "@/server/actions/pets";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";

const HEALTH_BG = {
  EXCELENT: "bg-primary",
  AVARAGE: "bg-yellow-500",
  BAD: "bg-red-500"
} as const;

export default async function DashboardPage() {
  const petsList = await getPets();
  return (
    <div className="w-full grid gap-6">
      {petsList.map((pet) => (
        <div
          key={pet.id}
          className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-primary-background"
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
              <Link href={`/dashboard/pet/${pet.id}`}>
                <PencilIcon />
              </Link>
            </Button>
            <Button>
              <TrashIcon />
            </Button>
          </div>
        </div>
      ))
      }
    </div >
  );
}
