"use client";
import Link from "next/link";
import { DarkMode } from "../DarkMode/DarkMode";
import Image from "next/image";
import { useState } from "react";
import { nav_links } from "./data";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" font-sans w-full m-0">
      <div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <h1 className="text-white-800 text-purple-500 font-black text-2xl">
                SHOP
              </h1>
            </Link>

            <div className="hidden sm:flex sm:items-center">
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
            <div className="hidden sm:flex sm:items-center">
              <DarkMode />
              <Link
                href="#"
                className="text-white-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600 mx-2"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="text-white-800 text-sm font-semibold border border-purple-600 px-4 py-1 rounded-lg bg-purple-900 hover:border-gray-100 text-white"
              >
                Sign up
              </Link>
            </div>

            <div className="sm:hidden cursor-pointer items-center flex justify-around w-24">
              <DarkMode />
              <Image
                src="/images/list.png"
                width={30}
                priority
                height={30}
                alt="Picture of the author"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          </div>
          {toggle && (
            <div className=" sm:hidden  border-t-2 border-purple-300 py-2">
              <div className="flex flex-col-reverse divide-y divide-y-reverse">
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold hover:text-purple-600 mb-1"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold hover:text-purple-600 mb-1"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold hover:text-purple-600 mb-1"
                >
                  Partners
                </Link>
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold hover:text-purple-600 mb-1"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex justify-end items-center border-t-2 pt-2">
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600 mr-2"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="text-white-800 text-sm font-semibold border px-4 py-1 rounded-lg bg-purple-600 hover:border-white-600"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
