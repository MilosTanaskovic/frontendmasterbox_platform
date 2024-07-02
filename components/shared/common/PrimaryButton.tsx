import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
    href: string;
    name: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    href,
    name
}) => {
  return (
    <Link href={href} className=" flex justify-end max-sm:w-full">
      <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
        {name}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
