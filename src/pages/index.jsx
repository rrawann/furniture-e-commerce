
import Image from "next/image";
import About from "@/components/AboutUs";
import Subscribe from "@/components/ContactUs/Subscribe";
import PopularProduct from "@/components/Product/PopularProduct";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <Hero />
     <PopularProduct />
      <About/>
      <Subscribe />
    </main>
  );
}
