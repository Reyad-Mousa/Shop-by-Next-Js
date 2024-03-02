"use client";

import Image from "next/image";
import Link from "next/link";
import { fetchProductId } from "@/app/api/fetchApi";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Product = ({ params }) => {
  const [productId, setProductId] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchProductId(params?.id).then(setProductId);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % productId.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productId.images.length) % productId.images.length
    );
  };
  return (
    <div className="  sm:grid sm:grid-cols-2 sm:px-3 h-screen gap-5 pt-20 ">
      <div className="flex justify-between items-center h-60 p-5  ">
        <FaAngleLeft
          className=" mr-3 bg-white h-20 text-black rounded-xl w-6 cursor-pointer"
          onClick={handlePrevImage}
        />{" "}
        <div className="flex   ">
          {productId?.images?.map((image, index) => (
            <Image
              className={` 
              h-48 w-48 max-w-48 sm:h-72 sm:w-72 md:w-full
                 rounded-xl ${
                   index === currentImageIndex ? "block" : "hidden"
                 }`}
              key={image.length}
              src={image}
              priority
              width={400}
              height={400}
              alt="Picture of the author"
            />
          ))}
        </div>
        <FaAngleRight
          className=" ml-3   bg-white text-black h-20 rounded-xl w-6 cursor-pointer"
          onClick={handleNextImage}
        />
      </div>
      <div className=" gap-2 flex flex-col">
        <h3 className="   font-bold text-2xl uppercase">{productId.title}</h3>
        <h1 className=" font-bold">Description : {productId.description}</h1>
        <p className=" mt-1  overflow-ellipsis overflow-clip">{productId.id}</p>
        <h1 className="font-bold">
          Price :
          <span className="font-bold  text-red-600"> {productId.price}</span>
        </h1>
        <Link
          className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href="#"
        >
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Product;
