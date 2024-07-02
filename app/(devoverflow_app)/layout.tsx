import Header from "@/components/shared/header/Header";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import React from "react";

interface DevOverflowAppLayoutProps {
  children: React.ReactNode;
  isHeaderVisible?: boolean;
}

const DevOverflowAppLayout: React.FC<DevOverflowAppLayoutProps> = ({
  children,
  isHeaderVisible = true,
}) => {
  return (
    <div className="background-light850_dark100 relative">
      {/** Header */}
      {isHeaderVisible && <Header />}
      {/** App Layout */}
      <div className="flex">
        {/** LeftSidebar */}
        <LeftSidebar 
          isHeaderVisible={isHeaderVisible}
        />
        {/** Main Content */}
        <main
          id="main-content-devoverflow-app"
          className={` flex min-h-screen flex-1 flex-col px-6 pb-6 max-md:pb-14 sm:px-14 ${isHeaderVisible ? 'pt-52' : 'pt-10'}`}
        >
          <div className=" mx-auto w-full max-w-5xl">{children}</div>
        </main>
        {/** RightSidebar */}
        <RightSidebar 
          isHeaderVisible={isHeaderVisible}   
        />
      </div>
      {/** Footer & Toaster */}
      <footer>
        <p>&copy; 2021 FrontendMasterBox</p>
      </footer>
    </div>
  );
};

export default DevOverflowAppLayout;
