import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RenderTagProps {
  _id: string;
  name: string;
  field?: any;
  totalQuestions?: number;
  showCount?: boolean;
  showIcon?: boolean;
  handleTagRemove?: (name: string, field: any) => void;
}

const RenderTag: React.FC<RenderTagProps> = ({
  _id,
  name,
  field,
  totalQuestions,
  showCount = false,
  showIcon = false,
  handleTagRemove,
}) => {

  const badgeContent = (
    <Badge className=" subtle-medium background-light800_dark300 text-light400_light500 gap-1 rounded-md border-none px-4 py-2 uppercase">
      <span>{name}</span>
      {showIcon && (
        <Image
          src="/assets/icons/close.svg"
          alt="Close Icon"
          width={12}
          height={12}
          className=" cursor-pointer object-contain invert-0 dark:invert"
        />
      )}
    </Badge>
  );

  if (showIcon && handleTagRemove) {
    return (
      <div
        onClick={() => handleTagRemove(name, field)}
        className=" flex cursor-pointer items-center justify-between gap-2"
      >
        {badgeContent}
      </div>
    );
  }

  return (
    <Link
      href={`/tags/${_id}`}
      key={_id}
      className=" flex cursor-pointer items-center justify-between gap-2"
    >
      {badgeContent}
      {showCount && (
        <span className=" small-medium text-dark500_light700">
          {totalQuestions}
        </span>
      )}
    </Link>
  );
};

export default RenderTag;
