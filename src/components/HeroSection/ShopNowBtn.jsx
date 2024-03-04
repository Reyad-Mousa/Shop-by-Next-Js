"use client";
import { useEffect } from "react";
// ShopNowButton.js
const scrollToElement = (elementId) => {
  const element = document.querySelector(elementId);
  const position = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
};

const ShopNowButton = () => {
  useEffect(() => {
    const button = document.querySelector(".shop-now-button");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToElement("#cardFilter");
    });
  }, []);
  return (
    <button
      
      className="shop-now-button transition-all hover:bg-purple-600 border-2 border-purple-500 mr-4 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
    >
      SHOP NOW
    </button>
  );
};

export default ShopNowButton;
