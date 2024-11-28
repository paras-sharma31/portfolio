import { montserrat } from "@/app/font";
import { MdOutlineElectricBolt } from "react-icons/md";

export default function EngineStart({ setStart }: any) {
  const handleStart = () => {
    const audio = new Audio("/assests/engine.mp3");
    audio.play().catch((err) => console.error("Error playing audio:", err));
    setStart(true);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-scroll">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex items-center justify-center">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <div
                    className="border border-[#7C7C7C] rounded-full "
                    onClick={handleStart}
                  >
                    <MdOutlineElectricBolt
                      fill="#fff"
                      size={"35px"}
                      className="rotate-12 "
                    />
                  </div>
                </div>
                <span
                  className={`text-white ${montserrat.style.fontFamily} font-semibold pl-4 tracking-widest `}
                >
                  START ENGINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
