import { sql } from "drizzle-orm";
import { integer, text, } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper"
import { pets } from ".";

export const diary = createTable("diary", {
  id: text("id").notNull().primaryKey(),
  date: integer("date", { mode: 'timestamp' }).default(sql`(current_timestamp)`),
  text: text("text").notNull(),
  petId: text("petId").notNull().references(() => pets.id, { onDelete: "cascade" })
});
