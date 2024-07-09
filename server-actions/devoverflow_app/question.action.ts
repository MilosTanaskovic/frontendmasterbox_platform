/* eslint-disable no-empty */
"use server";

import { connectToDatabase } from "@/database/mongoose";
import questionModel from "@/database/question.model";
import tagModel from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    // connect to DB
    connectToDatabase();
    console.log("params", params);
    const { title, content, tags, author } = params;
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
  } catch (error) {}
}
