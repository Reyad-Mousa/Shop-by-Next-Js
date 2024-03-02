"use client";
import Link from "next/link";
import { DarkMode } from "../DarkMode/DarkMode";
import Image from "next/image";
import { useState } from "react";
import { nav_links } from "./data";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import Cart from "../Cart/Cart";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const [openCart, setOpenCart] = useState(false);
  const handelToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className=" font-sans w-full m-0 fixed  bg-inherit  z-50  shadow-md ">
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
              <div
                onClick={() => setOpenCart(!openCart)}
                className=" relative cursor-pointer mx-4"
              >
                <FaShoppingCart className="text-purple-500 text-2xl " />
                <h6 className="absolute top-[-12px] right-[-9px] z-10 bg-red-500 rounded-full items-center text-[14px] justify-center flex p-[11px] h-2 w-2">
                  {cart.length}
                </h6>
                {openCart && <Cart />}
              </div>
            </div>

            <div className="sm:hidden cursor-pointer items-center flex  gap-3 ">
              <div
                onClick={() => setOpenCart(!openCart)}
                className=" relative cursor-pointer  "
              >
                <FaShoppingCart className="text-purple-500 text-2xl " />
                <h6 className="absolute top-[-12px] right-[-9px] z-10 bg-red-500 rounded-full items-center text-[14px] justify-center flex p-[11px] h-2 w-2">
                  {cart.length}
                </h6>
                {openCart && <Cart />}
              </div>
              <DarkMode />
              <Image
                src="/images/list.png"
                width={30}
                priority
                height={30}
                alt="Picture of the author"
                onClick={() => handelToggle()}
              />
            </div>
          </div>
          {toggle && (
            <div className=" sm:hidden  border-t-2 border-purple-300 py-2">
              <div className="flex flex-col ">
                {nav_links.map((links) => (
                  <Link
                    onClick={() => handelToggle()}
                    key={links.id}
                    href={links.href}
                    className="text-white-800 p-2  text-sm font-semibold hover:text-purple-600 mr-4"
                  >
                    {links.title}
                  </Link>
                ))}
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
