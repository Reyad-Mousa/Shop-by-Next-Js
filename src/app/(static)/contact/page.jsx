import Image from "next/image";
import Input from "postcss/lib/input";

function contact() {
  return (
    <div className="flex w-auto">
      <div className=" max-lg:hidden w-auto" >
        <Image
          className="w-auto "
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
        className="w-auto px-12 py-10 bg-white flex-col justify-start items-center gap-10 inline-flex"
      >
        <div className="text-center text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">
          Book Appointment
        </div>
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>        <div className="self-stretch h-12 px-10 py-3.5 bg-sky-500 rounded flex-col justify-start items-center gap-2.5 flex">
          <div className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">
            Book Appointment
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
