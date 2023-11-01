import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function product({ params }) {
  const product = await getData(params.id);

  return (
    <div className=" m-5  flex overflow-hidden border-2 rounded-2xl border-purple-900  ">
      <div className="p-4 md:p-5">
        <h3 className=" pb-16  font-bold text-2xl uppercase">
          {product.title}
        </h3>
        <div className="flex flex-wrap justify-center w-auto  border-2 rounded-2xl border-purple-900">
          {product.images.map((image) => (
            <Image
              className={` ${styles.image}  hover:scale-110 m-2 h-auto rounded-xl`}
              key={product.id}
              src={image}
              priority
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          ))}
        </div>
        <div className="mt-16">
          <h1 className=" font-bold">Description :</h1>
          <p className=" mt-1  overflow-ellipsis overflow-clip">
            {product.description}
          </p>
          <h1 className="font-bold">
            Price :
            <span className="font-bold  text-red-600"> {product.price}</span>
          </h1>
        </div>

        <a
          className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}
