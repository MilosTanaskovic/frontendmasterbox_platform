"use client";
import { Badge } from "@/components/ui/badge";
import { FilterType } from "@/types";
import React from "react";

interface RenderFilterProps {
  questionFilter: FilterType[];
  containerClasses?: string;
  otherClasses?: string;
}

const RenderFilter: React.FC<RenderFilterProps> = ({ questionFilter }) => {
  const active = "newest";
  return (
    <div className="mt-4 hidden flex-wrap gap-3 md:flex">
      {questionFilter?.map((item) => {
        return (
          <Badge
            key={item.value}
            onClick={() => {}}
            className={` body-medium rounded-lg px-6 py-3 capitalize shadow-none 
            ${
              active === item.value
                ? " bg-primary-100 text-primary-500"
                : " bg-light-800 text-light-500"
            }`}
          >
            {item.label}
          </Badge>
        );
      })}
    </div>
  );
};

export default RenderFilter;
