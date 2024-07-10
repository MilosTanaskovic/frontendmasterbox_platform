"use server";

import { connectToDatabase } from "@/database/mongoose";
import questionModel from "@/database/question.model";
import userModel from "@/database/user.model";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "@/types/user";
import { revalidatePath } from "next/cache";

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

export async function createUser(userData: CreateUserParams) {
  try {
    // connect to DB
    connectToDatabase();
    // create a user
    const newUser = await userModel.create(userData);
    return newUser;
  } catch (error) {
    console.log("Error in createUser", error);
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    // connect to DB
    connectToDatabase();
    // update a user
    const { clerkId, updateData, path } = params;

    await userModel.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);
  } catch (error) {
    console.log("Error in updateUser", error);
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    // connect to DB
    connectToDatabase();
    // delete a user
    const { clerkId } = params;
  
    const user = await userModel.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete user from db
    // and questions, answers, comments, etc.

    // get user question ids
    // const userQuestionsIds = await questionModel.find({ author: user._id }).distinct('_id');
    // delete user questions
    await questionModel.deleteMany({ author: user._id });
    // delete user answers

    // delete user 
    const deletedUser = await userModel.findByIdAndDelete(user._id);

    return deletedUser;

    } catch (error) {
    console.log("Error in deleteUser", error);
    }
}
