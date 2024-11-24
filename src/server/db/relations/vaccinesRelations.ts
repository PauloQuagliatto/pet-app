import { relations } from "drizzle-orm";

import { pets, vaccines } from "../tables";

export const vaccinesRelations = relations(vaccines, ({ one }) => ({
  pet: one(pets, {
    fields: [vaccines.petId],
    references: [pets.id]
  })
}));
