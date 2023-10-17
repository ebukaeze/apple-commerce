import React from "react";
import Image from "next/image";
import { urlFor } from "../../../sanity";

interface Props {
  products: Product;
}

const Explore = ({ products }: Props) => {
  const truncate = (str: string, n: number) => {
    return str.length <= n ? str : str.substring(0, n) + "...";
  };
  return (
    <div>
      <div className="flex flex-col">
        <div
          className="w-full flex py-4 flex-col lg:flex-row items-start 
        justify-center lg:space-y-6 mt-12 bg-white px-4 rounded-lg drop-shadow-md"
        >
          <div className="flex-none relative w-44">
            <Image
              src={urlFor(products.image[0]).url()}
              alt={products._id}
              className="flex inset-0 h-[280px] w-[230px] object-contain"
              width={230}
              height={280}
              loading="lazy"
            />
          </div>
          <form className="flex flex-col lg:w-[70%] flex-auto p-6 border-l">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {products.title}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                ${products.price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                In stock
              </div>
            </div>
            <p className="text-sm text-slate-700 py-4">
              {truncate(products.description, 70)}
            </p>
            <div className="flex w-full flex-wrap flex-row py-4 place-items-center justify-center space-x-4">
              <div className="w-full flex space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row flex-col items-center justify-center">
                <button
                  className="flex w-[100%] h-10 px-3 lg:px-4 items-center justify-center font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="flex w-[100%] items-center justify-center h-10 px-3 lg:px-4 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Explore;
