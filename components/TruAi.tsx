import VectorImage from "@/public/images/vectorAi.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TruAi() {
  return (
    <div className="lg:clip-custom-polygon bg-blue-900 dark:bg-[#1B1C1E] lg:h-[450px] my-10 lg:my-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="pt-20">
        <Image src={VectorImage} alt="vector" className="hidden lg:block" />
      </div>
      <div className="text-center space-y-3 flex flex-col items-center">
        <h3 className="text-white text-2xl md:text-5xl">
          Meet{" "}
          <span className="bg-clip-text text-2xl md:text-5xl bg-gradient-to-r from-[#ee216b] to-[#9747ff] text-transparent">
            Tru-AI
          </span>
        </h3>
        <h4 className="text-white text-2xl font-medium">
          Design. Create. Deploy.
        </h4>
        <p className="bg-clip-text text-xl bg-gradient-to-r from-[#ee216b] to-[#9747ff] text-transparent">
          <span className="text-white">_____</span> the Future of AI | Power to
          EDIT
        </p>
        <p className="text-white">
          Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website
        </p>
        <div className="pb-10">
          <Link href="/about">
            <Button
              styleName="secondary"
              icon={() => (
                <FaArrowRightLong className="text-white dark:text-black" />
              )}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative hidden lg:block w-1/3">
        <video
          src={require("../public/videos/product-intro_1_dmajx1_qaemeu.mp4")}
          className="rounded-full"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
