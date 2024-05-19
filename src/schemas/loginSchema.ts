import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Deve haver algo no campo de email" })
    .email({ message: "Email deve ser válido" }),
  password: z
    .string({ required_error: "Senha é necessária" })
    .min(8, { message: "Senha deve conter mais de 8 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
