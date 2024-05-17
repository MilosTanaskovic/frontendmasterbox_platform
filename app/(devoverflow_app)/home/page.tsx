import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
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
        {/** Search + Filter */}
        <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
          <LocalSearchbar
            route="/home"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            placholder="Search for Questions Here..." 
            className="flex-1"
          />
          filter
          {/*
          <Filter /> */}
        </div>
      </section>
      <section id="questions-items" className=""></section>
    </>
  );
};

export default HomePage;
