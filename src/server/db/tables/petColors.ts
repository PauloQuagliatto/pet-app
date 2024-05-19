import { integer, text, } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper"
import { pets } from ".";


export const petColors = createTable("petColor", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  color: text("color"),
  petId: text("petId")
    .notNull()
    .references(() => pets.id, { onDelete: "cascade" }),
});
