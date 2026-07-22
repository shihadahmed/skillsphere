
import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4']);
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.AUTH_DB_URI || "";
const client = new MongoClient(uri);


client.connect()
  .then(() => console.log("✅ Successfully connected to MongoDB!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const db = client.db("skillsphere");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_for_build_only",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});