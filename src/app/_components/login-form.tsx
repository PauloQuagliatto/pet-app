"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { toast } from "sonner";

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(data: LoginSchema) {
    toast.promise(signIn("credentials", data), {
      loading: "Fazendo seu login",
      success: "Seja bem-vindo",
      error: "Não foi possível realizar seu login"
    });
  }


  return (
    <Card className="bg-primary-background border-primary-background">
      <CardHeader className="space-y-1 flex flex-col items-center">
        <CardTitle className="text-2xl font-bold text-gray-100">
          Login
        </CardTitle>
        <CardDescription className="text-gray-300">
          Entre já! Seu pet te espera!
        </CardDescription>
      </CardHeader>
      <CardContent className="w-80 h-96 flex flex-col justify-between">
        <Form {...form}>
          <form
            className="flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100">
                    Email:
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="m@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100">
                    Senha:
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full rounded-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <div className="flex flex-col items-center gap-3">
          <span className="text-gray-100">Não possui uma conta?</span>
          <Button className="rounded-full">
            <Link className="inline-block w-full text-center text-sm underline" href="/sign-up">
              Faça seu Cadastro
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
