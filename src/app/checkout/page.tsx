"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import Button from "../components/Button";

const Checkout = () => {
  const router = useRouter();
  const items = useSelector(selectCartItems);

  const [groupItemsInCart, setGroupItemsInCart] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);

      return results;
    }, {} as { [key: string]: Product[] });
    setGroupItemsInCart(groupItems);
  }, [items]);

  return (
    <div className="w-full items-center bg-[#ececec] h-full pb-8">
      <div className="h-[14vh] w-full flex bg-slate-50 items-center justify-start p-6 mt-4">
        <h1 className="text-4xl gap-y-4">
          {items.length > 0 ? "Review Your Cart" : "Your Cart is Empty"}
        </h1>
      </div>
      {items.length === 0 && (
        <div className="flex w-full px-8 items-center justify-center mt-10">
          <Button
            title="Continue Shopping"
            onClick={() => router.push("/")}
            width="lg:w-[30%] w-[50%]"
            padding="p-4"
            bg="white"
            weight="font-medium"
            color="text-black"
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
