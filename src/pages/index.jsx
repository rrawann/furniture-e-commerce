
import Image from "next/image";
import About from "@/components/AboutUs";
import Subscribe from "@/components/ContactUs/Subscribe";
import PopularProduct from "@/components/Product/PopularProduct";
import Hero from "@/components/Hero";
import { getAllProducts } from '../../src/utils/API';
import NewsCarde from "@/components/NewsCard";

export default function Home({products}) {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <Hero  />
     <PopularProduct products={products}/>
      <About/>
      <Subscribe />
      <NewsCarde />
    </main>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProducts();
  console.log(products,"products+++++++++++++++=====");
  return {
    props: {
      products,
      // categories,
    },
  };
};