import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const socialIcons = [
    {
      icon: "/assests/email.png",
      link: "sharmaparas388@gmail.com",
    },
    {
      icon: "/assests/github.png",
      link: "https://github.com/paras-sharma31",
    },
    {
      icon: "/assests/linkedin.png",
      link: "https://www.linkedin.com/in/paras-sharma-6b5908236/",
    },
  ];
  return (
    <div className=" flex justify-center flex-col gap-5">
      <p className=" text-bold text-black text-[40px] ">Hi, I am</p>
      <div>
        <h2 className="text-[50px] font-bold">Paras Sharma</h2>
        <span className="text-[#909090] font-extrabold">
          Front-end Developer
        </span>
      </div>

      <div className=" flex items-center pt-5">
        {socialIcons.map((icons, index) => (
          <Link
            href={icons.link}
            key={index}
            target="_blank"
            className=" bg-[#C4C4C4] m-3 p-2 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-125"
          >
            <Image src={icons.icon} alt="social-icon" width={25} height={25} />
          </Link>
        ))}
      </div>
    </div>
  );
}
