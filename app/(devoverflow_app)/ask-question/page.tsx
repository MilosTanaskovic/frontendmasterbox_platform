import React from "react";
import { AskQuestionForm } from "@/components/shared/form";
import { redirect } from "next/navigation";
import { getUserById } from "@/server-actions/devoverflow_app/user.action";

interface AskQuestionPageProps {}

const AskQuestionPage: React.FC<AskQuestionPageProps> = async () => {
  // const { userId } = auth();
  const userId = "12345";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <section id="ask-question-form">
      <h1 className=" h1-bold text-dark100_light900">Ask a public quesiton</h1>
      <div className=" mt-9">
        <AskQuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </section>
  );
};

export default AskQuestionPage;
