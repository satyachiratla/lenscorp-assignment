import Link from "next/link";
import Button from "./UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Blogs() {
  return (
    <div className="flex flex-col items-center dark:bg-gradient-to-b dark:from-black dark:to-black bg-gradient-to-b from-yellow-50 to-red-50 py-20">
      <h2 className="text-2xl">OUR BLOGS</h2>
      <div className="border h-1.5 rounded-full w-16 bg-gradient-to-r from-sky-500 to-cyan-300" />
      <h3 className="py-10 text-2xl md:text-4xl 2xl:text-5xl md:font-medium text-center">
        Inhouse Mindscape
      </h3>
      <div className="flex flex-col justify-center items-center gap-5 px-4">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="group dark:bg-[#1B1C1E] bg-white p-6 md:h-[500px] lg:h-[410px] rounded-2xl max-w-xl space-y-5 dark:hover:bg-gradient-to-b dark:hover:from-[#1B1C1E] dark:hover:to-[#1B1C1E] hover:bg-gradient-to-b from-yellow-50 to-white transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-medium text-red-400 opacity-100 transform translate-y-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
              New!
            </h2>
            <h3 className="text-3xl lg:h-20 transition-transform duration-300 group-hover:-translate-y-8">
              How AI is Revolutionizing Your Shopping Experience
            </h3>
            <p className="bg-yellow-100 dark:bg-[#242424] px-4 py-10 lg:h-44 rounded-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-8">
              From personalized recommendations to frictionless checkout, AI is
              transforming the way you shop. Discover the future of retail and
              how AI is making shopping faster, easier, and more enjoyable....
            </p>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/blogs"
                className="flex gap-2 items-center text-red-400"
              >
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="group bg-white dark:bg-[#1B1C1E] p-6 md:h-[500px] lg:h-[410px] rounded-2xl max-w-xl space-y-5 dark:hover:bg-gradient-to-b dark:hover:from-[#1B1C1E] dark:hover:to-[#1B1C1E] hover:bg-gradient-to-l from-sky-50 to-white transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-medium text-gray-500 opacity-100 transform translate-y-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
              May 8th, 2024
            </h2>
            <h3 className="text-3xl lg:h-20 transition-transform duration-300 group-hover:-translate-y-8">
              Generative AI
            </h3>
            <p className="bg-sky-100 dark:bg-[#242424] px-4 py-10 lg:h-44 rounded-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-8">
              In today&apos;s data-driven marketing world, keeping up with
              content creation demands can be a challenge. Read our latest blog
              to explore the power of Generative AI and its potential to reshape
              the marketing landscape....
            </p>
            <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href="/blogs"
                className="flex gap-2 items-center text-red-400"
              >
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="group bg-white dark:bg-[#1B1C1E] dark:hover:bg-gradient-to-b dark:hover:from-[#1B1C1E] dark:hover:to-[#1B1C1E] p-6 md:h-[410px] max-w-[1180px] rounded-2xl space-y-5 hover:bg-gradient-to-t from-red-50 to-white transition-all duration-300 ease-in-out">
          <h2 className="text-xl font-medium text-gray-500 opacity-100 transform translate-y-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
            May 15, 2024
          </h2>
          <h3 className="text-3xl md:h-20 transition-transform duration-300 group-hover:-translate-y-8">
            The Evolution of AI in Games
          </h3>
          <p className="bg-red-50 px-4 dark:bg-[#242424] py-10 md:h-36 rounded-2xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-8">
            The integration of artificial intelligence (AI) within the gaming
            industry has been a remarkable journey, marked by continual
            innovation. Read our latest blog to dive deep into the fascinating
            history of AI in games and discover the evolution that continues to
            shape the future of play!...
          </p>
          <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Link
              href="/blogs"
              className="flex gap-2 items-center text-red-400"
            >
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-4 2xl:pt-6">
        <Link href="/about">
          <Button
            styleName="secondary"
            icon={() => <FaArrowRightLong className="text-white" />}
          >
            Explore More
          </Button>
        </Link>
      </div>
    </div>
  );
}
