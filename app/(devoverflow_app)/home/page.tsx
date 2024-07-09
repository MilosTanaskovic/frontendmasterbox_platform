import React from "react";
import { QuestionCard } from "@/components/shared/card";
import LocalSelectFilter from "@/components/shared/filter/LocalSelectFilter";
import RenderFilter from "@/components/shared/filter/RenderFilter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/dev-overflow-app";
import { NoResult, PrimaryButton } from "@/components/shared/common";
import { getQuestions } from "@/server-actions/devoverflow_app/question.action";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = async () => {
  const questionData = await getQuestions({});
  const { questions } = questionData;

  return (
    <>
      {/** Questions Filter Section */}
      <section id="questions-filter" className=" flex flex-col gap-4">
        {/** Title + Btn */}
        <div className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className=" h1-bold text-dark100_light900">All Questions</h1>
          <PrimaryButton href="/ask-question" name="Ask a Question" />
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
          {questions.length > 0 ? (
            questions?.map((questionCardData) => {
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
