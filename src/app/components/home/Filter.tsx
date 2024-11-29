import { montserrat } from "@/app/font";
import { ProjectImg } from "@/app/utils/const";
import Image from "next/image";

export default function Filters() {
  return (
    <div className="bg-[#1A1A1A] w-full h-auto flex justify-center items-center flex-col">
      <div className=" border-b border-[#7C7C7C] text-sm text-[#7C7C7C] flex gap-8 w-[450px] justify-around pb-1 my-10">
        <p
          className={` ${montserrat.style.fontFamily} font-semibold  hover:text-[#FFFBFB] cursor-pointer tracking-widest `}
        >
          ALL
        </p>
        <p
          className={` ${montserrat.style.fontFamily} font-semibold  hover:text-[#FFFBFB]  cursor-pointer tracking-widest `}
        >
          CODED
        </p>
        <p
          className={` ${montserrat.style.fontFamily} font-semibold  hover:text-[#FFFBFB]  cursor-pointer tracking-widest `}
        >
          DESIGN
        </p>
      </div>
      <div className="flex w-full ">
        {ProjectImg.map((item, index) => (
          <div className="flex " key={index + 1}>
            <Image
              src={"/assests/project3.png"}
              width={100}
              height={100}
              alt={item.img}
              className="w-auto h-[200px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
