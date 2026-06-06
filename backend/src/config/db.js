import mongoose from "mongoose";
import { ENV } from "../utils/env.js";

export const connectDB = async (req, res) => {
  try {
    const MONGO_URI = ENV.MONGO_URI;
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }

    const conn = await mongoose.connect(MONGO_URI);

    console.log("MONGODB Connected : ", conn.connection.host);
    console.log("Database:", conn.connection.name);
  } catch (error) {
    console.error("Error connection to MONGODB : ", error);

    process.exit(1);
  }
};
