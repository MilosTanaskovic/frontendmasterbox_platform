import React from "react";
import { RenderTag, RenderQuestion } from "../common";

interface RightSidebarProps {}

const RightSidebar: React.FC<RightSidebarProps> = () => {
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      _id: 2,
      title:
        "What is the best way to learn about the latest developments in the field of machine learning?",
    },
    {
      _id: 3,
      title:
        "What is the best way to learn about the latest developments in the field of machine learning?",
    },
    {
      _id: 4,
      title:
        "What is the best way to learn about the latest developments in the field of machine learning?",
    },
    {
      _id: 5,
      title:
        "What is the best way to learn about the latest developments in the field of machine learning?",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "JavaScript",
      totalQuestions: 5,
    },
    {
      _id: 2,
      name: "React",
      totalQuestions: 5,
    },
    {
      _id: 3,
      name: "HTML5",
      totalQuestions: 5,
    },
    {
      _id: 4,
      name: "Vue",
      totalQuestions: 5,
    },
    {
      _id: 5,
      name: "CSS3",
      totalQuestions: 5,
    },
  ];

  return (
    <aside
      id="right-sidebar"
      className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-52 shadow-light-300 max-xl:hidden dark:shadow-none"
    >
      <div className="">
        <h3 className=" h3-bold text-dark200_light900">Hot Network</h3>
        <div className=" mt-7 flex w-full flex-col gap-7">
          {hotQuestions?.map((question) => {
            return (
              <RenderQuestion
                key={question._id}
                _id={question._id}
                title={question.title}
              />
            );
          })}
        </div>
      </div>
      <div className=" mt-16">
        <h3 className=" h3-bold text-dark200_light900">Popular Tags</h3>
        <div className=" mt-7 flex flex-col gap-4">
          {popularTags?.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
