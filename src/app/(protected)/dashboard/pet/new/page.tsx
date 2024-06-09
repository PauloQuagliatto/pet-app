"use client"

import { CalendarIcon, CameraIcon, PlusIcon, TrashIcon } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { format } from "date-fns";

import { createPet } from "@/server/actions/pets";

import { CreatePetSchema, createPetSchema } from "@/schemas/createPetSchema";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Label } from "@/app/_components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/_components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/_components/ui/popover";
import { Calendar } from "@/app/_components/ui/calendar";

import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

export default function NewPetPage() {
  const form = useForm<CreatePetSchema>({
    resolver: zodResolver(createPetSchema),
    defaultValues: {
      name: "",
      image: "",
      colors: [{ val: "" }],
      birthDate: new Date()
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "colors"
  })

  function onSubmit(data: CreatePetSchema) {
    console.log(data);
    toast.promise(
      createPet(data),
      {
        loading: "Criando seu pet",
        success: "Seu pet foi criado com sucesso",
        error: "Houve um erro na criação de seu pet"
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
                <FormItem className="w-full">
                  <FormLabel className="w-full flex items-center justify-center cursor-pointer">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={field.value ?? undefined} alt="pet-image" />
                      <AvatarFallback>
                        <CameraIcon className="text-gray-400" />
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
  )
}
