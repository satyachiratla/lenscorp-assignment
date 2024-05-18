"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Blue from "@/public/images/blue.jpg";
import Green from "@/public/images/green.jpg";
import Red from "@/public/images/red.jpg";
import Yellow from "@/public/images/yellow.jpg";

const images = [Green, Blue, Red, Yellow];
const descriptions = [
  {
    title: "Exclusive Rights",
    text: "Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.",
    color: "green",
    gradientFrom: "from-green-100",
    gradientTo: "to-green-50",
    outline: "outline-green-400",
  },
  {
    title: "Research Driven",
    text: "We regularly benchmark our solutions via comparing industry-wide evaluations so our partners only get the best that AI can offer.",
    color: "cyan",
    gradientFrom: "from-cyan-100",
    gradientTo: "to-cyan-50",
    outline: "outline-cyan-400",
  },
  {
    title: "Plug-and-Play",
    text: "We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.",
    color: "red",
    gradientFrom: "from-red-100",
    gradientTo: "to-red-50",
    outline: "outline-red-400",
  },
  {
    title: "Lifetime Support",
    text: "Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.",
    color: "orange",
    gradientFrom: "from-orange-100",
    gradientTo: "to-orange-50",
    outline: "outline-orange-400",
  },
];

export default function Solutions() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center dark:bg-gradient-to-b dark:from-black dark:to-black bg-gradient-to-b from-cyan-50 to-green-100 px-4">
      <h2 className="text-2xl">WHY CHOOSE LENS</h2>
      <div className="border h-1.5 rounded-full w-20 bg-gradient-to-r from-sky-500 to-cyan-300" />
      <h3 className="py-10 text-2xl md:text-4xl 2xl:text-5xl md:font-medium text-center">
        AI-driven solutions backed by <br /> science
      </h3>
      <p className="text-gray-400 max-w-3xl text-center">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-14 pt-10">
        <ul className="space-y-2">
          <li>✔️ State-of-the-art solutions</li>
          <li>✔️ Fast & Efficient</li>
          <li>✔️ No extra computation fee</li>
          <li>✔️ No licensing fee</li>
        </ul>
        <ul className="space-y-2">
          <li>✔️ Lifetime support & upgrades</li>
          <li>✔️ Plug-and-Play</li>
          <li>✔️ 24x7 Progress Monitoring</li>
          <li>✔️ Incremental Updates</li>
        </ul>
      </div>
      <div className="my-10 flex flex-col md:flex-row items-center gap-5">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`group h-[400px] w-[320px] dark:bg-[#1B1C1E] flex flex-col justify-between bg-white p-6 rounded-3xl hover:bg-gradient-to-b ${desc.gradientFrom} ${desc.gradientTo} hover:outline outline-1 ${desc.outline}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h4 className="font-medium text-2xl">{desc.title}</h4>
            <Image
              src={images[index]}
              alt={desc.color}
              className={`mx-auto transition-opacity duration-1000 ${
                visibleIndex === index || hoverIndex === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            <p>{desc.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
