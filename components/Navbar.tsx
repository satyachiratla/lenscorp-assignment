"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import Logo from "@/public/images/logo.jpg";
import LogoWhite from "@/public/images/logo-white.jpg";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  const toggleHandler = () => {
    setToggle(false);
  };

  return (
    <header className="relative h-screen">
      {theme === "dark" ? (
        <video
          src={require("../public/videos/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4")}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-hero-gradient bg-no-repeat bg-cover"></div>
      )}
      <nav
        className={`relative dark:bg-gray-900 flex justify-between items-center px-10 lg:px-28 2xl:px-36 py-3 bg-white transition-transform duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <Image
            src={theme !== "dark" ? Logo : LogoWhite}
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className="md:hidden relative">
          <GiHamburgerMenu
            size={30}
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle && (
            <ul className="dropdown">
              <li>
                <Link
                  href="/makemyweb"
                  className="transition-all text-white hover:text-gray-700"
                  onClick={toggleHandler}
                >
                  MakeMyWeb.
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  scroll={false}
                  className={`${
                    pathname === "/"
                      ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                      : "transition-all text-white hover:text-gray-700"
                  }`}
                  onClick={toggleHandler}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                      : "transition-all text-white hover:text-gray-700"
                  }`}
                  onClick={toggleHandler}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`${
                    pathname === "/blogs"
                      ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                      : "transition-all text-white hover:text-gray-700"
                  }`}
                  onClick={toggleHandler}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <IoMoon size={20} className="cursor-pointer text-white" />
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/makemyweb"
              className="transition-all hover:text-gray-700"
            >
              MakeMyWeb.
            </Link>
          </li>
          <li>
            <Link
              href="/"
              scroll={false}
              className={`${
                pathname === "/"
                  ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                  : "transition-all hover:text-gray-700"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                  : "transition-all hover:text-gray-700"
              }`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`${
                pathname === "/blogs"
                  ? "bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-300 text-transparent"
                  : "transition-all hover:text-gray-700"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme !== "dark" ? (
              <IoMoon size={20} className="cursor-pointer" />
            ) : (
              <IoIosSunny size={20} className="cursor-pointer" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
