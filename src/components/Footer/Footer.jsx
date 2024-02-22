import Image from "next/image";
import { social_media } from "./data";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" font-sans w-full m-0  bg-purple-950">
      <div className="container flex  justify-evenly w-64 mx-auto py-4 cursor-pointer	">
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={30}
            priority
            height={30}
            alt="Picture of the author"
          />
        ))}
      </div>

      <div className="w-full  p-4 text-center text-neutral-700  dark:text-neutral-200">
        © 2023 Copyright:
        <Link
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Tailwind Elements
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
