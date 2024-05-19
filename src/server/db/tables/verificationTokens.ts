import { integer, text, primaryKey } from "drizzle-orm/sqlite-core";

import { createTable } from "./helper";

export const verificationTokens = createTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
