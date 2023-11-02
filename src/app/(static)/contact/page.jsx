import Image from "next/image";
import Link from "next/link";
import Input from "postcss/lib/input";
import style from "./page.module.css";
function contact() {
  return (
    <div className="mx-auto sm:p-20 flex w-auto  ">
      <div className=" max-lg:hidden w-auto bg-cover ">
        <Image
          className={style.image}
          src="/images/contact.png"
          priority
          width={500}
          height={250}
          alt="Picture of the author"
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          width: "-webkit-fill-available",
        }}
        className="w-auto px-12 py-10   shadow-md flex-col justify-start items-center gap-10 inline-flex"
      >
        <div className="text-center  text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
          Contact To More Information
        </div>
        <div className="w-full max-w-xs ">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-purple-700 text-black focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="Email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-purple-700 text-black focus:shadow-outline"
                id="Email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="Phone">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black focus:outline-purple-700 text-black "
                id="Phone"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="Massage">
                Massage
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-purple-700 text-black focus:shadow-outline"
                id="Massage"
                type="text"
                placeholder="Add Massage"
              />
            </div>

            <div className=" cursor-pointer self-stretch h-12 px-10 py-3.5 bg-sky-500 rounded flex-col justify-start items-center gap-2.5 flex">
              <div className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">
                Send
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
