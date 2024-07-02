"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AskQuestionSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";

interface AskQuestionFormProps {}

const AskQuestionForm: React.FC<AskQuestionFormProps> = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof AskQuestionSchema>>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof AskQuestionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-10"
      >
        {/** Question Title Input */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className=" flex w-full flex-col">
              <FormLabel className=" paragraph-semibold text-dark400_light800 ">
                Question Title <span className=" text-red-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  placeholder="Question Title"
                  className=" no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className=" body-regular mt-2.5 text-light-500">
                Be specific and imagine you’re asking a question to another
                person.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        {/** Question Explanation Editor */}
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className=" flex w-full flex-col gap-3">
              <FormLabel>
                Detailed explanation of your problem?{" "}
                <span className=" text-red-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className=" body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        {/** Tags Input */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className=" flex w-full flex-col">
              <FormLabel className=" paragraph-semibold text-dark400_light800 ">
                Tags <span className=" text-red-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  placeholder="Add Tags..."
                  className=" no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className=" body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AskQuestionForm;
