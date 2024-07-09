import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strict", true);

  if (!process.env.MONGODB_JSCD_PLATFORM_URL)
    return console.log("Missing MongoDB URL");

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_JSCD_PLATFORM_URL as string, {
      dbName: "devoverflow_app",
    });

    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
