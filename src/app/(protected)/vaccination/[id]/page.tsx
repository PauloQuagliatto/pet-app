import { Button } from "@/components/ui/button";
import { getPetVaccines } from "@/server/actions/vaccines";
import { Plus } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  }
}

export default async function VaccinesList({ params: { id } }: PageProps) {
  try {
    const vaccineList = await getPetVaccines(id);
    return (
      <div className="w-full md:w-[80%] lg:w-[60%] grid gap-3 md:px-12">
        <div className="flex justify-end">
          <Button asChild>
            <Link href={`${id}/new`} className="flex gap-1">
              <Plus />
              Nova Vacina
            </Link>
          </Button>
        </div>
        {vaccineList.length > 0 ?
          <ul>
            {vaccineList.map((vaccine) =>
              <li key={vaccine.id}>
                {vaccine.name}
              </li>
            )}
          </ul> :
          <h2 className="text-lg font-semibold text-center">Nenhuma vacina registada para este pet</h2>}
      </div>
    );
  } catch (e) {
    return <h1 className="text-lg text-red-500 font-semibold">Houve um erro, recarregar a página</h1>;
  }
}
