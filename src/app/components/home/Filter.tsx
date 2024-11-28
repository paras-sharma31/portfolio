import { montserrat } from "@/app/font";

export default function Filters() {
  return (
    <div className="bg-[#1A1A1A] w-full h-[100px] flex justify-center items-center">
      <div className=" border-b border-[#7C7C7C] flex gap-8 w-[450px] justify-around pb-1 ">
        <p
          className={`text-[#7C7C7C] ${montserrat.style.fontFamily} font-semibold text-sm hover:text-[#FFFBFB] cursor-pointer`}
        >
          ALL
        </p>
        <p
          className={`text-[#7C7C7C] ${montserrat.style.fontFamily} font-semibold text-sm hover:text-[#FFFBFB]  cursor-pointer`}
        >
          CODED
        </p>
        <p
          className={`text-[#7C7C7C] ${montserrat.style.fontFamily} font-semibold text-sm hover:text-[#FFFBFB]  cursor-pointer`}
        >
          DESIGN
        </p>
      </div>
    </div>
  );
}
