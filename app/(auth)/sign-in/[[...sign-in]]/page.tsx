import React from "react";
import { SignIn } from "@clerk/nextjs";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  return <SignIn forceRedirectUrl={'/home'}  />;
};

export default SignInPage;
