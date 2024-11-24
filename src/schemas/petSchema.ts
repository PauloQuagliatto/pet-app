import { z } from "zod";

export const petSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  birthDate: z.date(),
  colors: z.array(
    z.object({
      val: z.string()
    })
  )
});

export type PetSchema = z.infer<typeof petSchema>;
