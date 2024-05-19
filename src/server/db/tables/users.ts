import { integer, text } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper"


export const users = createTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  phone: text("phone"),
  password: text("password")
});
