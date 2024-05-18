"use client";

import Link from "next/link";
import Button from "./UI/Button";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <div
      className={`absolute top-[40%] left-28 lg:top-56 lg:left-56 ${
        theme === "dark" ? "flex flex-col justify-center items-center" : ""
      }`}
    >
      <h2 className="text-2xl md:text-[64px] 2xl:text-[100px] md:leading-[5rem] 2xl:leading-[8rem] text-center md:text-start">
        We are at the {theme !== "dark" ? <br></br> : ""} forefront of AI
      </h2>
      <p
        className={`hidden md:block 2xl:text-xl font-medium leading-6 ${
          theme === "dark" ? "text-center" : "text-start"
        }`}
      >
        From Conserving Wildlife to Automatically Generating <br></br>{" "}
        Caricatures– We Do It All
      </p>
      <div className="pt-4 2xl:pt-6">
        <Link href="/about">
          <Button styleName="primary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
