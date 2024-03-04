// Products.js
"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { fetchProducts } from "../../api/fetchApi";
import Card from "@/components/Card/Card";

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
    <div className="flex justify-center  items-center flex-col pt-20 ">
      <h2 className="mb-10 px-6 text-3xl font-bold">Latest Products</h2>
      <Card products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
