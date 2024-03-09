
import Image from "next/image";

import Products from "./products";
import About from "@/components/AboutUs";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
 
      <About/>
      <Products/>
    </main>
  );
}
