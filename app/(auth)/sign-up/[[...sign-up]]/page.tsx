import React from 'react';
import { SignUp } from "@clerk/nextjs";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {

  return (
    <SignUp />
  )
}

export default SignUpPage