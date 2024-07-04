/* eslint-disable no-unused-vars */
"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
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
import { AskQuestionSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { RenderTag } from "../common";

interface AskQuestionFormProps {}

const AskQuestionForm: React.FC<AskQuestionFormProps> = () => {
  const editorRef = useRef<Editor | null>(null);
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

  // handle KeyborardEvent on Input
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag should be less than 15 characters",
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  // handle remove tag
  const handleTagRemove = (name: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== name);
    form.setValue('tags', newTags);
  };
  console.log("form", form);
  console.log("tags")
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
                {/** Editor */}
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(_evt, editor) =>
                    // @ts-ignore
                    (editorRef.current = editor)
                  }
                  initialValue=""
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "codesample",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "codesample | bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style: "body { font-family:Inter; font-size:16px }",
                    statusbar: false,
                  }}
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
                <>
                  <Input
                    placeholder="Add Tags..."
                    className=" no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {/** Tags Badge */}
                  {field.value.length > 0 && (
                    <div className=" flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag) => (
                       <RenderTag
                        key={tag}
                        name={tag}
                        field={field}
                        _id={tag}
                        showCount={false}
                        showIcon={true}
                        handleTagRemove={handleTagRemove}
                       />
                      ))}
                    </div>
                  )}
                </>
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
