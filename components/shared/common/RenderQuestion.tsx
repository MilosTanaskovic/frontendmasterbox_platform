import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RenderQuestionProps {
  _id: number;
  title: string;
}

const RenderQuestion: React.FC<RenderQuestionProps> = ({ _id, title }) => {
  return (
    <Link
      href={`/questions/${_id}`}
      key={_id}
      className=" flex cursor-pointer items-center justify-between gap-7"
    >
      <p className=" body-medium text-dark500_light700">{title}</p>
      <Image
        src={"/assets/icons/chevron-right.svg"}
        alt="chevron right"
        width={20}
        height={20}
        className=" invert-colors"
      />
    </Link>
  );
};

export default RenderQuestion;
