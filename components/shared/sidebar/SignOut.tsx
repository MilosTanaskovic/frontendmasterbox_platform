import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SignOutProps {}

const SignOut: React.FC<SignOutProps> = () => {
  return (
    <div className="">
      <SignedOut>
        <div className=" flex flex-col gap-3">
          {/** Login btn */}
          <Link href={"/sign-in"}>
            <Button className=" small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src={"/assets/icons/account.svg"}
                alt="login"
                width={20}
                height={20}
                className=" invert-colors lg:hidden"
              />
              <span className=" primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          {/** SignUp btn */}
          <Link href={"/sign-up"}>
            <Button className=" small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src={"/assets/icons/sign-up.svg"}
                alt="sign up"
                width={20}
                height={20}
                className=" invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default SignOut;
