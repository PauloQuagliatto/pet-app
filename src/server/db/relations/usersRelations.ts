import { relations } from "drizzle-orm";

import { pets, users, vets } from "../tables";

export const usersRelations = relations(users, ({ one, many }) => ({
  pets: many(pets),
  vets: one(vets, {
    fields: [users.id],
    references: [vets.userId],
  })
}));
