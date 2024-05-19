import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter mais de 2 caracteres" })
      .regex(/^[A-Za-z]+$/i, "Somente letras são permitidas"),
    email: z
      .string()
      .email({ message: "Email deve ser válido" }),
    phone: z.string().optional(),
    password: z.string().min(8, { message: "Senha deve conter mais de 8 caracteres" }),
    confirmPassword: z.string(),
  }).superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Confirmação diferente da senha",
          path: ["confirmPassword"]
        });
      }
    });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
