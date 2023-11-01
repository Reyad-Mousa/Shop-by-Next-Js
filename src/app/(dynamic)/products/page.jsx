import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function products() {
  const data = await getData();
  return (
    <div className=" my-10 container flex flex-wrap gap-3 justify-center ">
      {data.products.map((product) => (
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
              <h3 className="truncate text-lg font-bold ">
                {product.title}
              </h3>
              <span className="font-bold  text-red-600">{product.price}</span>
            </div>
            <p className="mt-1 truncate text-gray-800 dark:text-gray-400  overflow-ellipsis overflow-clip">
              {product.description}
            </p>

            <Link
              className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              href="#"
            >
              Go somewhere
            </Link>
          </div>
        </Link>
      ))}
      
    </div>
  );
}
