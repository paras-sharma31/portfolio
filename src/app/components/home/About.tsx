import { montserrat, openSans } from "@/app/font";
import Category from "./Category";
import Separator from "../common/Separator";
import Button from "../common/Button";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col p-20 ">
      <div className="w-[50%] text-center ">
        <Button href="#">ABOUT ME</Button>
        <p className={`text-center pt-16 ${openSans.className} text-sm`}>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <button
          className={`text-left text-black w-fit border-r border-l border-black px-4 py-2 mt-10 text-sm ${montserrat.className} hover:border-b`}
        >
          EXPLORE
        </button>
      </div>
      <Separator />
      <Category />
      <Separator />
      <Button href="#">SKILLS</Button>
      <Skills />
    </div>
  );
}
