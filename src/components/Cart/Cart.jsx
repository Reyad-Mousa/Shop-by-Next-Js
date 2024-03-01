import Link from "next/link";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  function removeProductFromCart(productId, productTitle) {
    const newCart = cart.filter(
      (item) => item.id !== productId && item.title !== productTitle
    );
    setCart(newCart);
    console.log(
      `Product with ID ${productId} and title ${productTitle} removed from the cart.`
    );
  }

  return (
    <div className="max-h-[25rem]  z-50 overflow-auto rounded-lg absolute right-0 top-12 w-max sm:w-screen max-w-sm border border-gray-600 bg-gray-800  px-4 py-8 sm:px-6 lg:px-8">
      <span className=" z-20 absolute   right-2 top-[-2.2rem]  border-[1.1rem] border-gray-300 border-t-transparent border-r-transparent border-l-transparent "></span>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          <span className="text-purple-500 right-0 absolute top-0 m-3  p-1 ">
            X
          </span>

          {cart?.map((item) => (
            <div key={item?.id} className="flex items-center gap-4">
              <Image
                src={item?.thumbnail}
                alt=""
                width={100}
                height={100}
                className="size-16 rounded object-cover w-14 h-14"
              />

              <div>
                <h3 className="text-sm font-bold">{item?.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-300">
                  <div>
                    <dt className="inline">Brand :</dt>
                    <dd className="inline">{item?.brand}</dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline"> $ {item?.price}</dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2">
                <RiDeleteBinLine
                  onClick={(e) => {
                    e.stopPropagation();
                    removeProductFromCart(item.id, item.title);
                  }}
                  className="hover:text-red-500 text-2xl"
                />
              </div>
            </div>
          ))}
        </ul>
        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            alt="Cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-gray-400"
          >
            View My Cart ({cart?.length})
          </Link>

          <a
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </a>

          <a
            href="#"
            className="inline-block text-sm text-blue-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
