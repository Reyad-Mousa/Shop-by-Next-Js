"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemProvider } from "@/context/ThemContext";
import { CartContext } from "@/context/CartContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemProvider>
            <Navbar />
            <div className=" p-10  flex  justify-center  ">
              {children}
            </div>
            <Footer />
          </ThemProvider>
        </body>
      </html>
    </CartContext.Provider>
  );
}
