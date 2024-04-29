import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/sign-in"}>
        <Button className=" small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <span className=" primary-text-gradient">Log In</span>
        </Button>
      </Link>
    </div>
  );
}
