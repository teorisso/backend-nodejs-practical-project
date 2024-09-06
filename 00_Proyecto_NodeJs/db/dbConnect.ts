import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const mongodbUri = process.env.mongodbUri!;
    const jwtSecret = process.env.JWT_SECRET || "default_secret_key";
    await mongoose.connect(mongodbUri);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error", error);
  }
}
