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
        setCart(products); // Assuming response includes initial cart data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {}, [cart]);

  const handleAddToCart = async (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    // If the product is not in the cart, add it
    if (!isProductInCart) {
      try {
        const response = await fetch("https://dummyjson.com/carts/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: 1,
            products: [
              {
                id: product.id,
                quantity: 1,
              },
            ],
          }),
        });

        const data = await response?.json();

        // Flatten the array of products
        const flattenedProducts = data?.products?.flat();

        // Add the flattened products to the cart
        setCart((oldCart) => [...oldCart, ...flattenedProducts]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(`Product with ID ${product.id} is already in the cart.`);
    }
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-20   ">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-3 flex flex-col border-2 rounded-2xl border-purple-900 w-64"
        >
          <Link href={`/products/${product.id}`}>
            <Image
              className={`${styles.image} hover:opacity-50 w-full h-auto rounded-t-xl `}
              src={product.thumbnail}
              priority
              width={300}
              height={200}
              alt="Picture of the author"
              style={{ maxHeight: "200px", height: "200px", width: "auto" }}
            />
          </Link>
          <div className="p-4 md:p-5">
            <div className="flex justify-between">
              <h3 className="truncate text-lg font-bold">{product.title}</h3>
              <span className="font-bold text-red-600">{product.price}</span>
            </div>
            <p className="mt-1 truncate text-gray-800 dark:text-gray-400 overflow-ellipsis overflow-clip">
              {product.description}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
