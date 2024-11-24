import { relations } from "drizzle-orm";

import { users, vets } from "../tables";

export const vetsRelations = relations(vets, ({ one }) => ({
  vetToUser: one(users, {
    fields: [vets.userId],
    references: [users.id],
  }),
}));
