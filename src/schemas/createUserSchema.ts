import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter mais de 2 caracteres" })
      .regex(/^[A-Za-z\s]+$/i, "Somente letras são permitidas"),
    email: z
      .string()
      .email({ message: "Email deve ser válido" }),
    phone: z.string().optional(),
    password: z.string().min(8, { message: "Senha deve conter mais de 8 caracteres" }),
    confirmPassword: z.string(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
