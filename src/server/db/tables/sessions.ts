import { integer, text } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper";
import { users } from "./users";

export const sessions = createTable("session", {
  id: text("id"),
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

