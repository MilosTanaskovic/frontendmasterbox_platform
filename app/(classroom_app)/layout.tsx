import Header from "@/components/shared/header/Header";
// import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
// import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import React from "react";

interface ClassrommLayoutProps {
  children: React.ReactNode;
}

const ClassrommLayout: React.FC<ClassrommLayoutProps> = ({ children }) => {
  return (
    <div className="background-light850_dark100 relative">
      {/** Header */}
      <Header />
      {/** Main Content */}
      <main className="flex">
        {/** LeftSidebar */}
        {/* <LeftSidebar /> */}
        {/** SectionsContent */}
        <section id="section-1" className=" flex min-h-screen flex-1 flex-col px-6 pb-6 pt-52 max-md:pb-14 sm:px-14">
          <div className=" mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/** RightSidebar */}
        {/* <RightSidebar /> */}
      </main>
      {/** Footer & Toaster */}
      <footer>
        <p>&copy; 2021 FrontendMasterBox</p>
      </footer>
    </div>
  );
};

export default ClassrommLayout;
