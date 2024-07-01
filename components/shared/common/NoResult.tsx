import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NoResultProps {
    title: string;
    description?: string;
    link: string;
    linkTitle: string;
}

const NoResult: React.FC<NoResultProps> = ({title, description, link, linkTitle}) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center">
      <Image
        src={"/assets/images/light-llustration.png"}
        alt="No result found illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src={"/assets/images/dark-llustration.png"}
        alt="No result found illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <div className=" flex max-w-md flex-col items-center gap-3">
        <h2 className=" h2-bold text-dark200_light900 mt-8">
          {title}
        </h2>
        <p className=" body-regular text-dark500_light700 text-center">
          {description}
        </p>
        <Link
          href={link}
          className=" flex justify-end max-sm:w-full"
        >
          <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            {linkTitle}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoResult;
