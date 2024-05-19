import { relations } from "drizzle-orm";

import { pets, users } from "../tables";

export const usersRelations = relations(users, ({ many }) => ({
  pets: many(pets)
}));
