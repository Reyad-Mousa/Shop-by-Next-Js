// Products.js
"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { fetchProducts } from "../../api/fetchApi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res.products);
        console.log(res.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="grid grid-cols-4 gap-4 ">
      {products.map((product) => (
        <Link
          href={`/products/${product.id}`}
          key={product.id}
          className=" flex-3 flex flex-col border-2 rounded-2xl border-purple-900  w-64"
        >
          <Image
            className={`${styles.image} hover:opacity-50 w-full h-auto rounded-t-xl`}
            src={product.thumbnail}
            priority
            width={300}
            height={200}
            alt="Picture of the author"
            style={{
              maxHeight: "200px",
              height: "200px",
              width: "auto",
            }}
          />

          <div className="p-4 md:p-5">
            <div className="flex justify-between">
              <h3 className="truncate text-lg font-bold ">{product.title}</h3>
              <span className="font-bold  text-red-600">{product.price}</span>
            </div>
            <p className="mt-1 truncate text-gray-800 dark:text-gray-400  overflow-ellipsis overflow-clip">
              {product.description}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
