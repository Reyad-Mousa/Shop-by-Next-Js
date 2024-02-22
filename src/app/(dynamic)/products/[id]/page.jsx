"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { fetchProductId } from "@/app/api/fetchApi";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const Product = ({ params }) => {
  const [productId, setProductId] = useState({});

  useEffect(() => {
    fetchProductId(params.id).then(setProductId);
  }, []);

  return (
    <div className="  grid grid-cols-2  w-screen  h-screen ">
      <div className="flex justify-center">
        {/* {productId.images &&
            productId.images.map((image) => ( */}
        <Image
          className={` ${styles.image}  hover:scale-110 m-2 h-auto rounded-xl`}
          // key={image.length}
          // src={image}
          src={productId.thumbnail}
          priority
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
        {/* // ))} */}
      </div>

      <div className="">
        <h3 className=" pb-16  font-bold text-2xl uppercase">
          {productId.title}
        </h3>
        <h1 className=" font-bold">Description :</h1>
        <p className=" mt-1  overflow-ellipsis overflow-clip">{productId.id}</p>
        <h1 className="font-bold">
          Price :
          <span className="font-bold  text-red-600"> {productId.title}</span>
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
