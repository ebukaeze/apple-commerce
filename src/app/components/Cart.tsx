"use client";
import React from "react";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShoppingBagIcon from "@heroicons/react/24/outline/esm/ShoppingBagIcon";
import Link from "next/link";

const Cart = () => {
  const items = useSelector(selectCartItems);
  if (items.length === 0) return null;

  return (
    <div
      className="fixed bottom-10 right-10 z-40 flex h-16 w-16 cursor-pointer
    items-center justify-center rounded-full bg-gray-300 "
    >
      {items.length > 0 && (
        <span
          className="absolute -right-2 -top-2 z-50 flex items-center justify-center
            rounded-full h-7 w-7 bg-gradient-to-r from-pink-500 to-violet-500
            text-[10px] text-white"
        >
          {items.length}
        </span>
      )}
      <Link href={"/checkout"}>
        <ShoppingBagIcon className="h-8 w-8 text-black" color="#000" />
      </Link>
    </div>
  );
};

export default Cart;
