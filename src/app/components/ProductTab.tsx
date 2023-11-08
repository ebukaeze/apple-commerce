"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import Products from "./Products";

interface Props {
  categories: Category[];
  products: Product[];
}

const ProductTab = ({ categories, products }: Props) => {
  //function to show product based on category
  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category?._ref === categories[category]?._id)
      .map((product) => <Products product={product} key={product._id} />); // filter products by category
  };
  console.log(categories);
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Tab.Group>
        <Tab.List className="w-full flex h-20 transition-all items-center justify-center">
          {categories?.map((category) => (
            <Tab
              key={category._id}
              id={category._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light
         outline-none md:py-4 md:px-6 md:text-base transition ease-in-out duration-100 delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 hover:text-white
         ${
           selected
             ? "borderGradient bg-[#35383C] text-white"
             : "border-b border-[#3d3f43] text-[#7c7c7d]"
         }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-[100%] flex flex-row flex-wrap grow items-center justify-center mx-auto max-w-fit pt-10 pb-24 transition ease-in-out delay-100 duration-200">
          <Tab.Panel
            className="tabPanel grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 
          lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {showProducts(0)}
          </Tab.Panel>
          <Tab.Panel
            className="tabPanel grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 
          lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {showProducts(1)}
          </Tab.Panel>
          <Tab.Panel
            className="tabPanel grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 
          lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {showProducts(2)}
          </Tab.Panel>
          <Tab.Panel
            className="tabPanel grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 
          lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {showProducts(3)}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default ProductTab;
