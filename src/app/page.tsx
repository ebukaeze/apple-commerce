import Header from "./components/Header";
import Banner from "./components/Banner";
/* import { fetchCategories } from "./libs/fetchCategories";
import { fetchProducts } from "./libs/fetchProducts"; */
import ProductTab from "./components/ProductTab";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Hero } from "./components/Hero";

//Backend Code

export default async function Home() {
  const fetchCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
    );

    const data = await res.json();
    const categories: Category[] = data.categories;
    return categories;
  };

  const fetchProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);

    const data = await res.json();

    const products: Product[] = data.products;

    return products;
  };

  const category = await fetchCategories();
  const product = await fetchProducts();
  console.log(category);
  console.log(product);
  return (
    <div className="top-0 m-0 p-0 ">
      <Header />
      <main className="relative h-[186vh] w-full flex flex-col items-center">
        <Banner />
      </main>
      <section
        id="products"
        className="w-full relative z-40 mt-[-100vh] min-h-screen bg-[#1B1B1B]"
      >
        <div className="flex items-center flex-col justify-center w-full max-w-[1154px] mx-auto py-10 space-y-10 ">
          <h2 className="text-xl text-white tracking-wide font-medium">
            New Promos
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <ProductTab categories={category} products={product} />
        </div>
        <Hero />
        {/* <Cart /> */}
        <ScrollToTop />
      </section>
      <Footer />
    </div>
  );
}
