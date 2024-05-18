"use client";

import Logo from "@/public/images/logo.jpg";
import LogoWhite from "@/public/images/logo-white.jpg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center md:justify-around my-10 justify-center gap-4">
        <div className="space-y-2">
          <Image
            src={theme !== "dark" ? Logo : LogoWhite}
            alt="logo"
            className="mx-auto md:mx-0"
          />
          <h4>Tomorrow&apos;s Vision, Today!</h4>
          <ul className="flex gap-3 items-center pt-5">
            <li>
              <Link href="/">
                <FaFacebook size={30} className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram size={30} className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaLinkedin size={30} className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaDiscord size={30} className="hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaXTwitter size={30} className="hover:text-blue-500" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg tracking-wider text-center font-medium md:text-start">
            SITEMAP
          </h3>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            <li>
              <Link
                href="/"
                className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out"
              >
                MakeMyWeb.
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out"
              >
                Life at LENS
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="text-lg tracking-wider text-center font-medium md:text-start">
            CONNECT
          </h3>
          <ul className="space-y-2 flex flex-col items-center md:items-start">
            <li className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out">
              +1-517-9300-792
            </li>
            <li className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out">
              +91-9990-736-796
            </li>
            <li className="hover:bg-clip-text hover:bg-gradient-to-r from-sky-500 to-cyan-300 hover:text-transparent transition-all duration-300 ease-in-out">
              solutions@lenscorp.ai
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-indigo-950 dark:bg-[#1B1C1E] w-full h-20 flex flex-col justify-center md:flex-row md:justify-around items-center">
        <div>
          <p className="text-gray-400">
            2023 <span className="text-white">LENS, Inc.</span> All rights
            reserved.
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-4 text-white">
            <li>Code of conduct</li>
            <li>Sustainability Goals</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
