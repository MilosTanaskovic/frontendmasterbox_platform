/* eslint-disable no-empty-pattern */
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuestionCardDataType } from "@/types/card";
import { RenderTag } from "../common";
import Image from "next/image";

interface QuestionCardProps {
  questionCardData: QuestionCardDataType;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionCardData }) => {
  const { title, tags, votes, answers, views } = questionCardData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className=" flex gap-2">
        {tags?.map((tag) => {
          return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />;
        })}
      </CardContent>
      <CardFooter className=" justify-between">
        <div className="">
        <Image src={""} alt="" />
          <span className=" text-primary-500"> John Doe</span>
          <span className=" text-light-500">Asked 2 days ago</span>
        </div>
        <div className="">
            <span className=" text-light-500">{votes} Votes</span>
            <span className=" text-light-500">{answers} Answers</span>
            <span className=" text-light-500">{views} Views</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
