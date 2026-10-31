import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

async function main() {
  console.log("Testing connection to Neon PostgreSQL...");
  const result = await sql`SELECT version(), current_database(), now();`;
  console.log("Success! Connected to Neon:", result[0]);
}

main().catch((err) => {
  console.error("Connection failed:", err);
  process.exit(1);
});
