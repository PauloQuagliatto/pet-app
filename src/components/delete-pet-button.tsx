"use client"
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { deletePet } from "@/server/actions/pets";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function DeletePetButton({ id }: { id: string }) {
  const router = useRouter();

  function excludePet() {
    toast.promise(deletePet(id), {
      loading: "Deletando seu pet",
      error: "Não foi possível deletar seu pet",
      success: () => {
        router.refresh();
        return "Pet deletado com sucesso"
      }
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="submit" variant={"destructive"}>
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você está deletando seu pet
          </AlertDialogTitle>
          <AlertDialogDescription>
            Ao deletar seu animalzinho ele não poderá ser recuperado e seus dados serão perdidos, deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={excludePet}
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  );
}
