import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface RenderTagProps {
    _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag: React.FC<RenderTagProps> = ({ _id, name, totalQuestions, showCount }) => {
  return (
    <Link
      href={`/tags/${_id}`}
      key={_id}
      className=" flex cursor-pointer items-center justify-between gap-2"
    >
      <Badge className=" subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">{name}</Badge>
      {showCount && (
        <span className=" small-medium text-dark500_light700">{totalQuestions}</span>
      )}
    </Link>
  );
};

export default RenderTag;
