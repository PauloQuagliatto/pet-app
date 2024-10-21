"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { ChangeEvent } from "react";

import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { CreateUserSchema, createUserSchema } from "@/schemas/createUserSchema";
import { createUser } from "@/server/actions/users";
import { z } from "zod";

const createUserFormSchema = createUserSchema.superRefine(
  ({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Confirmação diferente da senha",
        path: ["confirmPassword"]
      });
    }
  });

export function CreateUserForm() {
  const router = useRouter();
  const form = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  function onSubmit(data: CreateUserSchema) {
    delete data.confirmPassword;
    void toast.promise(createUser(data), {
      loading: "Criando usuário ",
      success: () => {
        void router.push('/');
        return "Usuario criado "
      },
      error: "Falha ao criar usuário",
    });
  }

  return (
    <Card className="bg-primary-background border-primary-background">
      <CardHeader className="space-y-1 flex flex-col items-center">
        <CardTitle className="text-2xl font-bold text-gray-100">
          Registrar
        </CardTitle>
          <CardDescription className="text-gray-300">
            Preencha as informações para registrar
          </CardDescription>
      </CardHeader>
      <CardContent className="min-w-96 flex flex-col justify-between">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-100">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="name" 
                        placeholder="John"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-100">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="jon@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => {
                  function onChange(e: ChangeEvent<HTMLInputElement>) {
                    const input = e.target.value;

                    const cleaned = input.replace(/[^0-9]+/g, '').padStart(11, "_");
                    if(cleaned.length > 11) {
                      return;
                    }

                    const newValue = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2,3)} ${cleaned.slice(3,7)}-${cleaned.slice(
                      7,
                      12
                    )}`;

                    field.onChange(newValue);
                    return;
                  }

                  return (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-gray-100">
                        Telefone
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="phone"
                          placeholder="(00) 9 0000-0000"
                          {...field}
                          onChange={onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )}}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-100">
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-gray-100">
                      Confirmar Senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Registrar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
  );
}
