import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { fetchCategories } from "./libs/fetchCategories";
import { fetchProducts } from "./libs/fetchProducts";
import ProductTab from "./components/ProductTab";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Hero } from "./components/Hero";

//Backend Code

export default async function Home() {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return (
    <div className="top-0 m-0 p-0 ">
      <Header></Header>
      <main className="relative h-[186vh] w-full flex flex-col items-center">
        <Banner></Banner>
      </main>
      <section className="w-full relative z-40 mt-[-100vh] min-h-screen bg-[#1B1B1B]">
        <div className="flex items-center flex-col justify-center w-full max-w-[1154px] mx-auto py-10 space-y-10 ">
          <h2 className="text-xl text-white tracking-wide font-medium">
            New Promos
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <ProductTab categories={categories} products={products} />
        </div>
        <Hero />
        {/* <Cart /> */}
        <ScrollToTop />
      </section>
      <Footer />
    </div>
  );
}
