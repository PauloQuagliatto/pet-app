import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.configDotenv({
  path: __dirname + '/./../../../.env.local'
});

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/drizzle/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
  },
  dialect: 'sqlite'
} satisfies Config;
