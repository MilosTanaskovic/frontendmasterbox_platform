/* eslint-disable no-empty */
"use server";

import { connectToDatabase } from "@/database/mongoose";
import questionModel from "@/database/question.model";
import tagModel from "@/database/tag.model";
import userModel from "@/database/user.model";
import { CreateQuestionParams, GetQuestionsParams } from "@/types/question";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();

    const questions = await questionModel
      .find({})
      .populate({ path: "tags", model: tagModel })
      .populate({ path: "author", model: userModel })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log("Error in getQuestions", error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    // connect to DB
    connectToDatabase();

    const { title, content, tags, author, path } = params;
    // create a question
    const question = await questionModel.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await tagModel.findOneAndUpdate(
        { name: { $regex: new RegExp(`ˆ${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    // update the question
    await questionModel.findByIdAndUpdate(question._id, {
      $push: {
        tags: { $each: tagDocuments },
      },
    });

    revalidatePath(path ?? "");
  } catch (error) {}
}
