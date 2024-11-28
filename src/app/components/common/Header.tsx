import Link from "next/link";
import { montserrat } from "@/app/font";

export default function Header() {
  return (
    <div className=" w-screen h-[66px] flex justify-end items-center bg-black">
      <div className=" flex items-center gap-20 pr-10">
        <ul className="flex items-center gap-20 text-white font-bold">
          <li
            className={`hover:border-b-2 cursor-pointer ${montserrat.className}`}
          >
            About me
          </li>
          <li
            className={`hover:border-b-2 cursor-pointer ${montserrat.className}`}
          >
            Skills
          </li>
          <li
            className={`hover:border-b-2 cursor-pointer ${montserrat.className}`}
          >
            Portfolio
          </li>
        </ul>
        <Link
          href={"9896738921"}
          className={` bg-white rounded-[25px] text-xs font-bold p-2 ${montserrat.className} `}
        >
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}
