import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuestionFilterType } from "@/types";

interface LocalSelectFilterProps {
  filters: QuestionFilterType[];
  placeholder: string;
  otherClasses?: string;
  containerClasses?: string;
}

const LocalSelectFilter: React.FC<LocalSelectFilterProps> = ({
  filters,
  placeholder,
  otherClasses,
  containerClasses,
}) => {
  return (
    <div
      className={` relative ${containerClasses}`}
    >
      <Select>
        <SelectTrigger className={` body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses}`}>
          <SelectValue className=" line-clamp-1 flex-1 text-left" placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className=" mt-2">
          {filters?.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocalSelectFilter;
