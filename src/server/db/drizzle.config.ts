import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.configDotenv({
  path: __dirname + '/./../../../.env.local'
});

export default defineConfig({
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  driver: "turso",
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
