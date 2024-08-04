import { z } from "zod";

export const createOccurrenceSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date().optional(),
  status: z.enum(["EXCELENT", "AVARAGE", "BAD"])
});

export type CreateOccurrenceSchema = z.infer<typeof createOccurrenceSchema>;
