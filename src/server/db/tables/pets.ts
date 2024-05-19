import { integer, text, } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper"
import { users } from ".";


export const pets = createTable("pet", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  image: text("image"),
  tutorId: text("tutorId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  birthDate: integer("birthDate", { mode: 'timestamp' }),
  health: text("health", { enum: ["EXCELENT", "AVARAGE", "BAD"] })
});
