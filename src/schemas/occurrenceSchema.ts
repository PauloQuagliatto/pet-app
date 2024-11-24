import { z } from "zod";

export const occurrenceSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  date: z.date().optional(),
  status: z.enum(["EXCELENT", "AVARAGE", "BAD"])
});

export type OccurrenceSchema = z.infer<typeof occurrenceSchema>;
