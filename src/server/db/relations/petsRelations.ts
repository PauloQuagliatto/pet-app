import { relations } from "drizzle-orm";

import { pets, users, vaccines } from "../tables";
import { diary } from "../tables/diary";

export const pet_relations = relations(pets, ({ one, many }) => ({
  owner: one(users, {
    fields: [pets.tutorId],
    references: [users.id]
  }),
  diary: many(diary),
  vaccines: many(vaccines)
}))
