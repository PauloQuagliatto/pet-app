import { VaccineForm } from "@/components/vaccine-form";

type PageProps = {
  params: {
    id: string;
  }
}

export default function NewVaccine({ params: { id } }: PageProps) {
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] grid gap-3 md:px-12">
      <VaccineForm petId={id} />
    </div>
  );
}
