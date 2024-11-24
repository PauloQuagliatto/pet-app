import { z } from "zod";

export const vaccineSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  appliedAt: z.date(),
  revalidateAt: z.date(),
  applierId: z.string().optional(),
  petId: z.string()
});

export type VaccineSchema = z.infer<typeof vaccineSchema>;

export const vaccineFormSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  appliedAt: z.date(),
  revalidateAt: z.date(),
  applierId: z.string().optional(),
});

export type VaccineFormSchema = z.infer<typeof vaccineFormSchema>;
