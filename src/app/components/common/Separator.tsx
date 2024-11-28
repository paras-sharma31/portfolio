import Image from "next/image";

export default function Separator() {
  return (
    <div className="my-20">
      <Image
        src={"/assests/separator.png"}
        alt="divider-icon"
        width={100}
        height={100}
        className="w-[150px]"
      />
    </div>
  );
}
