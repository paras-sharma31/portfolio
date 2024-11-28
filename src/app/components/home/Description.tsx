import { montserrat, openSans } from "@/app/font";
import Image from "next/image";

export default function Description() {
  return (
    <div className="w-full h-[240px] bg-image flex justify-end items-center">
      <div className="flex flex-col gap-4 p-20 ">
        <h3
          className={`${montserrat.className} text-white text-[30px] tracking-wide	`}
        >
          IT BERRIES
        </h3>
        <p className={`text-white ${openSans.className} text-sm leading-tight`}>
          As a passionate Frontend Developer with 1.5 months of experience, I
          specialize in creating visually engaging and user-friendly web
          applications. With a strong foundation in HTML, CSS, and JavaScript, I
          am currently expanding my skills with modern frameworks like React and
          Next.js. I am committed to continuously learning and evolving in the
          fast-paced tech environment, contributing to projects that provide
          meaningful user experiences and solutions. I am eager to collaborate
          with dynamic teams to build innovative digital experiences.
        </p>
        <button
          className={`text-left text-white w-fit border-r border-l px-4 py-2 mt-4 text-sm ${montserrat.className} hover:border-b`}
        >
          READ MORE
        </button>
      </div>
      <div className="w-[100%] ">
        <Image
          src={"/assests/it.png"}
          alt="it-logo"
          width={100}
          height={100}
          className="w-[500px] h-[240px] "
        />
      </div>
    </div>
  );
}
