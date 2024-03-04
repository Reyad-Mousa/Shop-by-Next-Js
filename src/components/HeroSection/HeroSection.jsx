import Image from "next/image";
import styles from "./page.module.css";
import ShopNowButton from "./ShopNowBtn";

const HeroSection = () => {
  return (
    <section
      className={`sm:px-20 py-20 flex items-center h-screen ${styles.section}`}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-2 ${styles.title}`}>
          YOUR BEST ONLINE SHOP DESTINATION!
        </h2>
        <h3 className="text-2xl mb-8">
          Discover a world of endless shopping possibilities at our online
          store. Browse, choose, and order your favorite products from the
          comfort of your home.
        </h3>

        <ShopNowButton />
      </div>
      <div className="hidden sm:block">
        <Image
          src="/images/hero.png"
          priority
          width="1000"
          height="0"
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default HeroSection;
