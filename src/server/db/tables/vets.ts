import { integer, text } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper"
import { users } from "./users";
import { sql } from "drizzle-orm";


export const vets = createTable("vet", {
  id: text("id").notNull().primaryKey(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(current_timestamp)`),
  userId: text("userId").notNull().references(() => users.id),
});
