import { montserrat } from "@/app/font";
import Link from "next/link";

interface ButtonProps {
  children: string;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${montserrat.className}  text-2xl letter-space border-4 border-black py-2 px-10 transform transition-transform duration-300 hover:scale-110`}
    >
      {children}
    </Link>
  );
}
