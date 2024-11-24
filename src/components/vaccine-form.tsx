"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format, isAfter } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, CameraIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { VaccineFormSchema, vaccineFormSchema } from "@/schemas/vaccineSchema";
import { saveVaccine } from "@/server/actions/vaccines";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardHeader } from "./ui/card";

export function VaccineForm({
  petId,
}: {
  petId: string;
}) {
  const router = useRouter();
  const form = useForm<VaccineFormSchema>({
    resolver: zodResolver(vaccineFormSchema),
  });

  function handleSaveVaccine(data: VaccineFormSchema) {
    toast.promise(saveVaccine({ ...data, petId }), {
      success: () => {
        router.push(`/vaccination/${petId}`);
        return "Vacina salva com sucesso"
      },
      error: (e: Error) => e.message,
      loading: "Salvando vacina"
    });
  }
  return (
    <Card className="w-full p-8 bg-primary-background">
      <CardHeader>
        <h1 className="text-2xl font-semibold text-white">Nova vacina</h1>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSaveVaccine)}
          className="w-full flex flex-col items-center gap-4 mb-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="text-white">
                    Nome da vacina:
                  </FormLabel>
                  <FormControl >
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="text-white">
                    Descrição:
                  </FormLabel>
                  <FormControl >
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="appliedAt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-white">
                  Aplicada em:
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
          <FormField
            control={form.control}
            name="revalidateAt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-white">
                  Revalidar em:
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
                    <Avatar className="w-36 h-24 rounded-none">
                      <AvatarImage src={field.value ?? undefined} alt="pet-image" />
                      <AvatarFallback className="rounded-md hover:bg-gray-300 text-gray-400 hover:text-gray-500 transition-colors ease-in">
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
            name="applierId"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>
                    Aplicado por:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </Card>
  );
}
