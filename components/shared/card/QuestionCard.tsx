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
import { MetricDisplay, RenderTag } from "../common";
import Link from "next/link";
import { formatBigNumber, getTimestamp } from "@/lib/utils";

interface QuestionCardProps {
  questionCardData: QuestionCardDataType;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionCardData }) => {
  const { _id, title, tags, votes, answers, views, author, createdAt } =
    questionCardData;
  return (
    <Card className="card-wrapper light-border-2 ">
      <CardHeader className=" flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className=" subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <CardTitle className=" sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </CardTitle>
          </Link>
        </div>
        {/** If signed in add EDIT, DELETE actions */}
      </CardHeader>
      <CardContent className=" flex gap-2">
        {tags?.map((tag) => {
          return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />;
        })}
      </CardContent>
      <CardFooter className=" w-full flex-wrap justify-between">
        <div>
          <MetricDisplay
            imgUrl={author.picture}
            alt="user"
            value={author.name}
            title={` - asked ${getTimestamp(createdAt)}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles=" body-medium text-dark400_light700"
          />
        </div>
        <div className=" flex items-center gap-2">
          <MetricDisplay
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatBigNumber(votes)}
            title=" Votes"
            textStyles=" small-medium text-dark400_light800"
          />
          <MetricDisplay
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatBigNumber(answers.length)}
            title=" Answers"
            textStyles=" small-medium text-dark400_light800"
          />
          <MetricDisplay
            imgUrl="/assets/icons/eye.svg"
            alt="views"
            value={formatBigNumber(views)}
            title=" Views"
            textStyles=" small-medium text-dark400_light800"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
