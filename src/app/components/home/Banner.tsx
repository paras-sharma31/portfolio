import Profile from "./Profile";
import Header from "../common/Header";
import Image from "next/image";

export default function Bannner() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#D7D7D7] clip-diagonal-left flex items-center pl-32">
            <Profile />
          </div>
          <div className="absolute inset-0 w-full h-full bg-black clip-diagonal-right">
            <Header />
            <div className="flex justify-center pl-10  h-[400px] ">
              <Image
                src={"/assests/profile.png"}
                alt="profile-img"
                width={100}
                height={100}
                className="w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
