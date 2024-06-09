import Image from "next/image";
import { cn } from "@/lib/utils";


const AnimalList = [{ id: `pet`, name: `Animal`, birthDate: new Date(), health: "EXCELENT", breed: 'bigle', color: ['brown', 'black', 'white'] }, { id: `satan`, name: `Animall`, birthDate: new Date(), health: "BAD", breed: 'bigle', color: ['brown', 'black', 'white'] }]


export default function ListPage() {
  return (
    <div className="grid gap-6">
      {AnimalList.map((animal) => (
        <div key={animal.id} className="flex items-center space-x-4 border p-4 rounded-lg bg-primary-background">
          <Image
            alt="@jaredpalmer"
            className="rounded-full"
            height={48}
            src="/placeholder.svg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width={48}
          />
          <div className="text-sm font-medium leading-none">
            <h3 className="text-base font-bold">{animal.name}</h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{animal.birthDate.toLocaleDateString()}</p>
          </div>
          <div className={cn("h-4 w-4 rounded-full", (animal.health === "BAD" ? "bg-red-500" : animal.health === "AVARAGE" ? "bg-yellow-500" : "bg-primary"))} />
        </div>

      ))}

    </div>

  )
}


