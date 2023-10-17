"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Image from "next/image";
import { urlFor } from "../../../sanity";
import toast, { Toaster } from "react-hot-toast";
import ContinueCard from "./ContinueCard";

interface Props {
  product: Product;
}
function Products({ product }: Props) {
  const dispatch = useDispatch();
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanShow(false), 6000); // Set visibility to true after 1 second
    return () => clearTimeout(timer); // Clear the timeout when the component unmounts
  });
  const addItemToCart = () => {
    dispatch(addToCart(product));
    setCanShow(!canShow);
    toast.success(`${product.title} has been added to the cart`, {
      position: "bottom-center",
    });
  };
  return (
    <>
      <div
        className="flex h-fit w-[240px] select-none flex-col space-y-3 rounded-xl
    bg-[#35383C] p-4 md:h-[500px] md:w-[340px] sm:h-[400px] sm:w-[230px] md:p-10 mb-4 
    shadow-lg  sm:gap-x-2"
      >
        <div className="relative h-64 w-auto flex">
          <Image
            src={urlFor(product.image[0]).url()}
            alt={product.title}
            className="object-contain"
            width={256}
            height={256}
          />
        </div>
        <div className="flex w-full flex-1 items-center justify-between space-x-3 md:space-x-6">
          <div className="text-white space-y-3 text-xl md:text-2xl md:text-[24px]">
            <p>{product.title}</p>
            <div className="w-full flex flex-1 space-x-3">
              <p className="font-medium text-xl">Price:</p>
              <p className="text-slate-300"> ${product.price}</p>
            </div>
          </div>
          <div className="cartButton" onClick={addItemToCart}>
            <ShoppingCartIcon className="h-8 w-8 text-white"></ShoppingCartIcon>
          </div>
        </div>
        {canShow && <ContinueCard />}
      </div>
    </>
  );
}

export default Products;
