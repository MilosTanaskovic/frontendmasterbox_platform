import React from "react";
import { SignIn } from "@clerk/nextjs";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  return <SignIn />;
};

export default SignInPage;
