import React from "react";
import NavContent from "./NavContent";
import SignOut from "./SignOut";

interface LeftSidebarProps {
  isHeaderVisible?: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isHeaderVisible = true,
}) => {
  return (
    <aside
      id="left-sidebar"
      className={`${isHeaderVisible ? 'pt-52' : 'pt-10'} background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 shadow-light-300 max-sm:hidden lg:w-[266px] dark:shadow-none`} 
    >
      <NavContent className=" flex flex-1 flex-col gap-6" />
      <SignOut />
    </aside>
  );
};

export default LeftSidebar;
