import Header from "@/components/shared/header/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="background-light850_dark100 relative">
      {/** Header */}
      <Header />
      {/** Main Content */}
      <main className="flex">
        {/** LeftSidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-gray-200"> LeftSidebar </aside>
        {/** SectionsContent */}
        <section id="section-1" className=" flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className=" mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/** RightSidebar */}
        <aside className="hidden md:flex flex-col w-64 border-l border-gray-200"> RightSidebar </aside>
      </main>
      {/** Footer & Toaster */}
      <footer>
        <p>&copy; 2021 FrontendMasterBox</p>
      </footer>
    </div>
  );
};

export default Layout;
