import mongoose from "mongoose";
import { env } from "@/config/env";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Use a global cache to survive hot reloads in dev
const globalForMongoose = globalThis as unknown as {
  __mongoose?: MongooseCache;
};

const cached: MongooseCache = globalForMongoose.__mongoose ?? {
  conn: null,
  promise: null,
};

export async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.MONGODB_URI, {
      dbName: "python-learning-platform",
      // keep defaults; you can add options if needed
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  globalForMongoose.__mongoose = cached;
  return cached.conn;
}
