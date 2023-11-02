"use client";
import Link from "next/link";
import { DarkMode } from "../DarkMode/DarkMode";
import Image from "next/image";
import { useState } from "react";
import { nav_links } from "./data";
import SignPage from "./SignPage";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handel = () => {
    toggle(true);
  };
  return (
    <div className="container mx-auto px-4 font-sans w-full m-0">
      <div className="flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-white-800 text-purple-500 font-black text-2xl w-1/12">
            SHOP
          </h1>
        </Link>
        <div className="hidden sm:flex justify-between w-9/12">
          <div className=" sm:flex sm:items-center ">
            {nav_links.map((links) => (
              <Link
                key={links.id}
                href={links.href}
                className="text-white-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                {links.title}
              </Link>
            ))}
          </div>
          <DarkMode />
        </div>
        <SignPage />
        <div className="sm:hidden cursor-pointer items-center flex justify-around w-24 ">
          <DarkMode />
          <Image
            src="/images/list.png"
            width={30}
            height={30}
            priority
            alt="Picture of the author"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      {toggle && (
        <div className=" sm:hidden flex flex-col   items-center  border-t-2 border-purple-300 py-2">
          {nav_links.map((links) => (
            <Link
              onClick={() => handel()}
              key={links.id}
              href={links.href}
              className="flex flex-col-reverse divide-y divide-y-reverse border-b-2  hover:text-purple-600 py-1"
            >
              {links.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
