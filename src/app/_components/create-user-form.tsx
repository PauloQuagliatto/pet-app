"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/app/_components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { CreateUserSchema, createUserSchema } from "@/schemas/createUserSchema";

export function CreateUserForm() {
  const form = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  });
  function onSubmit(data: CreateUserSchema) {
    void toast.promise(, {
      loading: "Criando usuário ",
      success: "Usuario criado ",
      error: "Falha ao criar usuário",
    });
  }
  return (
      <Card className="min-w-sm mx-auto lg:w-[45%]">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Registrar</CardTitle>
          <p className="text-gray-500 dark:text-gray-400">
            Preencha as informações para registrar
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input id="name" placeholder="John" {...field} />
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
                    <FormLabel>Email</FormLabel>
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
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        placeholder="00000000000000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="mínimo 8 caracteres"
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
                    <FormLabel>Confirmar Senha</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="mínimo 8 caracteres"
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
    </div>
  );
}
