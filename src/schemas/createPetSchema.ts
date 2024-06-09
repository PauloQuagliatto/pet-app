import { z } from "zod";

export const createPetSchema = z.object({
  name: z.string(),
  image: z.string(),
  birthDate: z.date(),
  colors: z.array(
    z.object({
      val: z.string()
    })
  )
});

export type CreatePetSchema = z.infer<typeof createPetSchema>;
