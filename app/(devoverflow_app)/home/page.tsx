import React from "react";
import { QuestionCard } from "@/components/shared/card";
import LocalSelectFilter from "@/components/shared/filter/LocalSelectFilter";
import RenderFilter from "@/components/shared/filter/RenderFilter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/dev-overflow-app";
import Link from "next/link";
import { NoResult } from "@/components/shared/common";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const dammyQuestionsData: any = [
    // {
    //   _id: 1,
    //   title: "How to use React Router?",
    //   description:
    //     "I am trying to use React Router but I am not able to use it.",
    //   tags: [
    //     {
    //       _id: 1,
    //       name: "JavaScript",
    //     },
    //     {
    //       _id: 2,
    //       name: "React",
    //     },
    //     {
    //       _id: 3,
    //       name: "HTML5",
    //     },
    //   ],
    //   user: {
    //     name: "John Doe",
    //     avatar: "/assets/images/avatar.jpg",
    //   },
    //   upvotes: 10,
    //   createdAt: "2021-09-01T12:00:00.000Z",
    //   votes: 30,
    //   views: 10,
    //   answers: 2,
    // },
    // {
    //   _id: 2,
    //   title: "What is the difference between React and React Native?",
    //   description:
    //     "I am trying to understand the difference between React and React Native.",
    //   tags: [
    //     {
    //       _id: 1,
    //       name: "JavaScript",
    //     },
    //     {
    //       _id: 2,
    //       name: "React",
    //     },
    //     {
    //       _id: 3,
    //       name: "HTML5",
    //     },
    //   ],
    //   user: {
    //     name: "Jane Doe",
    //     avatar: "/assets/images/avatar.jpg",
    //   },
    //   upvotes: 20,
    //   createdAt: "2021-09-01T12:00:00.000Z",
    //   votes: 30,
    //   views: 5,
    //   answers: 1,
    // },
    // {
    //   _id: 3,
    //   title: "How to use React Hooks?",
    //   description:
    //     "I am trying to use React Hooks but I am not able to use it.",
    //   tags: [
    //     {
    //       _id: 1,
    //       name: "JavaScript",
    //     },
    //     {
    //       _id: 2,
    //       name: "React",
    //     },
    //     {
    //       _id: 3,
    //       name: "HTML5",
    //     },
    //   ],
    //   user: {
    //     name: "John Doe",
    //     avatar: "/assets/images/avatar.jpg",
    //   },
    //   upvotes: 28,
    //   createdAt: "2021-09-01T12:00:00.000Z",
    //   votes: 30,
    //   views: 8,
    //   answers: 3,
    // },
  ];
  return (
    <>
      {/** Questions Filter Section */}
      <section id="questions-filter" className=" flex flex-col gap-4">
        {/** Title + Btn */}
        <div className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className=" h1-bold text-dark100_light900">All Questions</h1>

          <Link
            href={"/ask-question"}
            className=" flex justify-end max-sm:w-full"
          >
            <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
              Ask a Question
            </Button>
          </Link>
        </div>
        {/** Search + Select Filter */}
        <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
          <LocalSearchbar
            route="/home"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            placholder="Search for Questions Here..."
            className="flex-1"
          />
          <LocalSelectFilter
            filters={HomePageFilters}
            otherClasses="min-h-[56px] sm:min-w-[170px]"
            containerClasses="hidden max-md:flex"
            placeholder="Select a Filter"
          />
        </div>
        {/** RenderFilter */}
        <RenderFilter questionFilter={HomePageFilters} />
      </section>
      {/** Questions Cards Section */}
      <section id="questions-cards" className="">
        <div className="mt-10 flex w-full flex-col gap-6">
          {/* <h2 className="h2-bold text-dark100_light900">Recent Questions</h2> */}
          {dammyQuestionsData.length > 0 ? (
            dammyQuestionsData?.map((questionCardData: any) => {
              return (
                <QuestionCard
                  key={questionCardData.title}
                  questionCardData={questionCardData}
                />
              );
            })
          ) : (
            <NoResult
              title={"Sorry, we couldn’t find any results"}
              description={
                "Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
              }
              link={"/ask-question"}
              linkTitle={"Ask a Question"}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
