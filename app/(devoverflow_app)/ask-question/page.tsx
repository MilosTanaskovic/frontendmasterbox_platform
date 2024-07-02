import React from "react";
import { AskQuestionForm } from "@/components/shared/form";

interface AskQuestionPageProps {}

const AskQuestionPage: React.FC<AskQuestionPageProps> = () => {
  return (
    <section id="ask-question-form">
      <h1 className=" h1-bold text-dark100_light900">Ask a public quesiton</h1>
      <div className=" mt-9">
        <AskQuestionForm />
      </div>
    </section>
  );
};

export default AskQuestionPage;
