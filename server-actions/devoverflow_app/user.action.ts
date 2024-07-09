"use server";

import { connectToDatabase } from "@/database/mongoose";
import userModel from "@/database/user.model";

export async function getUserById(params: any) {
  try {
    // connect to DB
    connectToDatabase();

    const { userId } = params;
    // get user by id
    const user = await userModel.findOne({
      clerkId: userId,
    });

    return user;
  } catch (error) {
    console.log("Error in getUser byId", error);
  }
}
