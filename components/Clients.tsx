import Image from "next/image";
import CoreImage from "@/public/images/clients.jpg";
import Co1 from "@/public/images/Co_1.jpg";
import Co2 from "@/public/images/Co_2.jpg";
import Grov from "@/public/images/grov.jpg";

export default function Clients() {
  return (
    <div className="my-20 flex flex-col items-center gap-10">
      <h3 className="text-3xl text-center md:text-start">
        We Work With Amazing Clients
      </h3>
      <div className="w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-4 animate-scroll">
          <Image src={CoreImage} alt="clients" />
          <Image src={Co1} alt="clients" />
          <Image src={Co2} alt="clients" />
          <Image src={Grov} alt="clients" />
        </div>
      </div>
      <div className="bg-indigo-950 dark:bg-[#1B1C1E] w-full h-80 flex flex-col justify-center gap-4 items-center">
        <h3 className="text-white font-medium text-3xl">By the numbers</h3>
        <div className="flex justify-center items-center">
          <div className="max-w-5xl flex items-center md:gap-20">
            <div className="stat place-items-center text-white space-y-2">
              <div className="stat-value">
                15<span className="text-blue-400 dark:text-gray-600"> +</span>
              </div>
              <div className="stat-desc text-white text-center font-medium text-lg leading-6">
                Solutions for <br></br> Global crises
              </div>
            </div>
            <div className="h-24 w-1 border-l border-white" />
            <div className="stat place-items-center text-white space-y-2">
              <div className="stat-value">
                10<span className="text-blue-400 dark:text-gray-600"> +</span>
              </div>
              <div className="stat-desc text-white text-center font-medium text-lg leading-6">
                University <br></br> Collaborations
              </div>
            </div>
            <div className="h-24 w-1 border-l border-white" />
            <div className="stat place-items-center text-white space-y-2">
              <div className="stat-value">
                25<span className="text-blue-400 dark:text-gray-600"> +</span>
              </div>
              <div className="stat-desc text-white text-center font-medium text-lg leading-6">
                Employees <br></br> Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
