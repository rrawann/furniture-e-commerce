
import Image from "next/image";
import About from "@/components/AboutUs";
import Subscribe from "@/components/ContactUs/Subscribe";
import PopularProduct from "@/components/Product/PopularProduct";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
     <PopularProduct />
      <About/>
      <Subscribe />
    </main>
  );
}
