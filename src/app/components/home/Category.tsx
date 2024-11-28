import { montserrat, openSans } from "@/app/font";
import Image from "next/image";

export default function Category() {
  const categoryObj = [
    {
      icon: "/assests/design.png",
      title: "DESIGN",
      description:
        " I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
      width: 50,
      height: 50,
    },
    {
      icon: "/assests/maintenance.png",
      title: "DEVELOPMENT",
      description:
        " I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
      width: 50,
      height: 50,
    },
    {
      icon: "/assests/development.png",
      title: "MAINTENANCE",
      description:
        " I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
      width: 70,
      height: 70,
    },
  ];
  return (
    <div className=" flex justify-center items-center flex-wrap gap-20">
      {categoryObj.map((list, index) => (
        <div className="relative w-[35%]" key={index + list.title}>
          <Image
            src={list.icon}
            alt={list.title}
            width={list.width}
            height={list.height}
          />
          <h2
            className={`${montserrat.className} text-xl tracking-widest absolute top-3 left-10`}
          >
            {list.title}
          </h2>
          <p className={`${openSans.className} text-xs font-light pl-9 `}>
            {list.description}
          </p>
        </div>
      ))}
    </div>
  );
}
