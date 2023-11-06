import React from "react";
import Products from "../components/Products";
import { fetchProducts } from "../libs/fetchProducts";
import { fetchCategories } from "../libs/fetchCategories";
import Image from "next/image";
import { urlFor } from "../../../sanity";
import ExploreTab from "../components/ExploreTab";

export default async function ExplorePage() {
  const productItems: Product[] = await fetchProducts();
  const categoriesItems: Category[] = await fetchCategories();
  return (
    <div className="flex w-full py-6 mt-4 space-y-6">
      <ExploreTab categories={categoriesItems} products={productItems} />
    </div>
  );
}
