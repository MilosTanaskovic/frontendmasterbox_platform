/* eslint-disable no-empty */
"use server";

import { connectToDatabase } from "@/database/mongoose";

export async function createQuestion(params: any) {
    try {
        // connect to DB
        connectToDatabase();
    } catch (error) {
        
    }
}