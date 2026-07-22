// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const uri = process.env.AUTH_DB_URI || "";


// const client = new MongoClient(uri, {
//   connectTimeoutMS: 10000,
//   socketTimeoutMS: 45000,
// });

// const db = client.db("skillsphere");

// export const auth = betterAuth({
//   database: mongodbAdapter(db),
//   emailAndPassword: {
//     enabled: true,
//   },
//   secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_for_build_only",
//   baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
// });

import dns from "node:dns";
// Google DNS সেট করা হলো
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.AUTH_DB_URI || "";

// MongoClient অপশনে directConnection বা srvMaxHosts যুক্ত করা
const client = new MongoClient(uri, {
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 5000, // দ্রুত এরর বা রেসপন্স হ্যান্ডেল করার জন্য
});

// সরাসরি DB অবজেক্ট নেওয়ার বদলেMongoClient কানেকশন নিশ্চিত করা
const db = client.db("skillsphere");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_for_build_only",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});