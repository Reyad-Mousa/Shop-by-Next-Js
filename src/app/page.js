import FilterProducts from "@/components/FilterProducts/FilterProducts";
import HeroSection from "@/components/HeroSection/HeroSection";
const page = () => {
  return (
    <main className="flex flex-col sm:pt-20">
      <HeroSection />
      <FilterProducts />
    </main>
  );
};

export default page;
