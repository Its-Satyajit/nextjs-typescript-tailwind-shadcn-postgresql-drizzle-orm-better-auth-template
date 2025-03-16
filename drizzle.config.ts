import env from "@/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schemas/",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
