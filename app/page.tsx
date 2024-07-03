import { ScrollArea } from "@/components/ui/scroll-area";
import DevOverflowAppLayout from "./(devoverflow_app)/layout";
import HomePage from "./(devoverflow_app)/home/page";
import { sidebarLinks } from "@/constants/dev-overflow-app";
import { PrimaryButton } from "@/components/shared/common";
import Header from "@/components/shared/header/Header";

export default function Home() {
  return (
    <>
      {/** Header Landing Page */}
      <Header isVisible={false} />
      {/** Hero Section */}
      <section className="container">
        <div className=" m-auto flex max-w-screen-md flex-col items-center gap-3 pb-24 pt-40">
          <h1 className=" h1-bold text-dark100_light900 text-3xl md:text-5xl">
            Welcome to DevOverflow
          </h1>
          <p className=" base-medium text-dark500_light700">
            A community-driven platform for asking and answering frontend
            programming questions. Get help, share knowledge, and collaborate
            with developers from around the world. Explore topics in frontend
            web development, mobile app development, algorithms, data structure
            and more.
          </p>
          <PrimaryButton href="/sign-in" name="Get Started" />
        </div>
      </section>
      {/** Apps Examples */}
      <section id="" className="container">
        <ul className=" my-6 flex items-center gap-6">
          {sidebarLinks?.map((link) => {
            return <li key={link.label}>{link.label}</li>;
          })}
        </ul>
        <ScrollArea className="   h-[800px] w-full rounded-md border">
          <div className=" pointer-events-none">
            <DevOverflowAppLayout isHeaderVisible={false}>
              <HomePage />
            </DevOverflowAppLayout>
          </div>
        </ScrollArea>
      </section>
    </>
  );
}
