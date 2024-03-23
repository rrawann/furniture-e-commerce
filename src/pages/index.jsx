
import Image from "next/image";

import Products from "./products";
import About from "@/components/AboutUs";
import Subscribe from "@/components/ContactUs/Subscribe";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
    <Products/>
      <About/>
      <Subscribe />
    </main>
  );
}
