"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { format, isAfter } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, CameraIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ChangeEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { updatePet } from "@/server/actions/pets";

import { CreatePetSchema, createPetSchema } from "@/schemas/createPetSchema";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card } from "@/app/_components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover";

import { cn } from "@/lib/utils";

type EditPetFormProps = {
  pet: CreatePetSchema & { id: string }
}

export function EditPetForm({ pet }: EditPetFormProps) {
  const router = useRouter();
  const form = useForm<CreatePetSchema>({
    resolver: zodResolver(createPetSchema),
    defaultValues: {
      ...pet
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "colors"
  })

  function onSubmit(data: CreatePetSchema) {
    toast.promise(
      updatePet({
        id: pet.id,
        ...data
      }),
      {
        loading: "Atualizando dados do seu pet",
        success: (data) => {
          if (data.success) {
            router.push("/dashboard");
          }
          return "Os dados do seu pet foram atualizados com sucesso"
        },
        error: "Houve um erro na atualização dos dados do seu pet"
      }
    );
  }

  return (
    <Card className="w-full p-8 bg-primary-background">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-4 mb-8"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => {
              function onChange(e: ChangeEvent<HTMLInputElement>) {
                const file = e.target.files ?? null;
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (event) => {
                  if (event.target?.result) {
                    field.onChange(event.target.result);
                  }
                };
                reader.readAsDataURL(file[0])
              }
              return (
                <FormItem className="w-full flex items-center justify-center">
                  <FormLabel className="cursor-pointer">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={field.value ?? undefined} alt="pet-image" />
                      <AvatarFallback className="hover:bg-gray-300 text-gray-400 hover:text-gray-500 transition-colors ease-in">
                        <CameraIcon />
                      </AvatarFallback>
                    </Avatar>
                  </FormLabel>
                  <FormControl >
                    <Input
                      type="file"
                      className="hidden"
                      onChange={onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-200">
                  Nome:
                </FormLabel>
                <FormControl>
                  <Input placeholder="Hércules" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full space-y-4">
            <Label className="text-gray-200">
              Cores do seu pet
            </Label>
            {fields.map((arrayField, i) => (
              <div
                key={arrayField.id}
                className="flex gap-3"
              >
                <FormField
                  control={form.control}
                  name={`colors.${i}.val` as const}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="Cores do pet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant={"destructive"}
                  onClick={() => fields.length - 1 !== 0 && remove(i)}
                  disabled={fields.length === 1}
                >
                  <TrashIcon />
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            onClick={() => append({
              val: ""
            })}
          >
            <PlusIcon />
          </Button>
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-200">
                  Data de nascimento:
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>
                          {
                            field.value ? format(field.value, "PPP", {
                              locale: ptBR
                            }) :
                              "Selecione a data de nascimento do seu pet"
                          }
                        </span>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      locale={ptBR}
                      selected={field.value}
                      onSelect={field.onChange}
                      defaultMonth={field.value}
                      initialFocus
                      disabled={(date) => isAfter(date, new Date())}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </form>
      </Form>
    </Card >
  );
}