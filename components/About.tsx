import Link from "next/link";
import Button from "./UI/Button";
import AboutLatestImage from "@/public/images/aboutLatest.jpg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function About() {
  return (
    <div className="flex flex-col items-center my-10 2xl:my-20 px-4">
      <h2 className="text-3xl 2xl:text-5xl dark:text-white">About Us</h2>
      <div className="border h-2 rounded-full w-24 2xl:w-36 bg-gradient-to-r from-sky-500 to-cyan-300 2xl:mt-2" />
      <div className="dark:bg-[#1B1C1E] group bg-sky-100 p-10 rounded-2xl flex flex-col items-center md:items-start md:flex-row-reverse md:justify-around gap-10 max-w-5xl mt-10 2xl:mt-16 hover:scale-105 2xl:hover:scale-110 duration-700 ease-in-out">
        <div className="bg-white group-hover:p-0 p-3 duration-700 ease-in-out rounded-xl">
          <Image
            src={AboutLatestImage}
            alt="aboutLatest"
            height={500}
            width={500}
            className="rounded-xl h-[400px] w-[400px] object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-10 mt-12 flex flex-col items-center md:items-start">
          <h3 className="font-medium text-3xl 2xl:text-4xl text-center md:text-start">
            Welcome To LENS
          </h3>
          <p className="dark:text-gray-400 md:max-w-lg text-gray-600 text-center md:text-start">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you don&apos;t
            have to.
          </p>
          <div>
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
      </div>
    </div>
  );
}
