// api.js
import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products/");
  return res.data;
};

export const fetchProductId = async (id) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);

  console.log(res, "Product");
  return res.data;
};


