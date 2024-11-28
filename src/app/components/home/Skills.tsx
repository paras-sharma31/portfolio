import { montserrat } from "@/app/font";
import Image from "next/image";

export default function Skills() {
  const usingSkillIcons = [
    {
      icon: "/assests/html.svg",
      title: "HTML",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/css.svg",
      title: "CSS",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/sass.svg",
      title: "SASS",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/js.svg",
      title: "JAVASCRIPT",
      width: 60,
      hight: 50,
    },
    {
      icon: "/assests/react.svg",
      title: "REACT",
      width: 60,
      hight: 50,
    },
    {
      icon: "/assests/nextjs.png",
      title: "NEXT JS",
      width: 60,
      hight: 50,
    },
    {
      icon: "/assests/bootstrap.svg",
      title: "BOOTSTRAP",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/chakra.png",
      title: "CHAKRA-UI",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/tailwind.png",
      title: "TAILWIND",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/ts.png",
      title: "TYPESCRIPT",
      width: 50,
      hight: 50,
    },
    {
      icon: "/assests/git.svg",
      title: "GIT",
      width: 60,
      hight: 60,
    },
    {
      icon: "/assests/figma.svg",
      title: "FIGMA",
      width: 40,
      hight: 20,
    },
  ];
  return (
    <div className="w-[50%] h-[600px] mt-16">
      <p className={`${montserrat.className} text-xl`}>USING NOW:</p>
      <div className="flex justify-center flex-wrap my-10 items-center gap-20 h-[117px] ">
        {usingSkillIcons.map((list, index) => (
          <div
            className=" flex flex-col items-center justify-between gap-4 h-full "
            key={index + list.title}
          >
            <Image src={list.icon} alt={list.title} width={60} height={60} />

            <p
              className={`text-center text-sm tracking-widest ${montserrat.style.fontFamily} font-light`}
            >
              {list.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
