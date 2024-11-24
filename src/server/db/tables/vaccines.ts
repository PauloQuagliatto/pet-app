import { integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

import { createTable } from "./helper"
import { pets } from "./pets";
import { users } from "./users";


export const vaccines = createTable("vaccines", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(current_timestamp)`),
  appliedAt: integer("appliedAt", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(current_timestamp)`),
  renovateAt: integer("renovateAt", { mode: "timestamp_ms" })
    .notNull(),
  applierId: text("userId")
    .references(() => users.id),
  petId: text("petId")
    .notNull()
    .references(() => pets.id, { onDelete: "cascade" })
});
