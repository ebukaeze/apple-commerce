"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import OrderSummary from "../components/OrderSummary";
import Button from "../components/Button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CheckoutProducts from "../components/CheckoutProducts";

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
    console.log(groupItems);
  }, [items]);

  return (
    <div className="w-full flex flex-col items-center bg-[#ececec] h-full pb-8">
      <div className="h-[14vh] w-full flex bg-slate-50 items-center justify-start p-6 mt-4">
        <h1 className="text-4xl font-[500] gap-y-4 tracking-normal">
          {items.length > 0 ? "Review Your Cart" : "Your Cart is Empty"}
        </h1>
      </div>
      {items.length === 0 && (
        <div className="flex w-full px-8 items-center flex-col space-y-10 justify-start mt-10 h-[80vh]">
          <ShoppingBagIcon height={75} width={70} className="text-zinc-500" />
          <p className="text-base font-medium text-zinc-500">
            There are currently no items in your Basket
          </p>
          <div className="w-full flex items-center flex-col justify-end mt-20 h-[30%] ">
            <button
              className=" ease group inline-flex relative py-4 w-[50%] lg:w-[30%] px-4 bg-transparent text-[18px] text-black
            font-medium rounded-lg cursor-pointer items-center justify-center box-border outline-1 
    border border-black hover:bg-gray-800 hover:text-slate-50 transition-all duration-100"
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
      {items.length > 0 && (
        <div
          className="w-[94.8%] max-[96vw] mx-auto flex flex-col items-start justify-start mt-4 bg-white px-3
         py-4 rounded-md"
        >
          <p>Notification (1)</p>
          <p className="text-[13px] font-medium">
            (1) Free delivery for purchase more than $50
          </p>
        </div>
      )}

      {items.length > 0 && (
        <div className="w-[100%] py-4 flex items-center">
          <div className="flex flex-col sm:flex-row sm:items-start items-center justify-center sm:justify-between space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 w-[100%] m-10">
            <div
              className="flex flex-2 w-full sm:w-[70%] bg-white rounded-md
            h-max px-4 space-y-4 py-6 shadow-sm"
            >
              <table className="table-auto w-full h-full space-y-4">
                <thead className="text-left uppercase py-4 font-semibold text-1xl divide-y-2 border-b border-black border-spacing-4 mb-6">
                  <tr className="mb-4">
                    <th>Apple</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                {Object.entries(groupItemsInCart).map(([key, items]) => (
                  <CheckoutProducts key={key} items={items} id={key} />
                ))}
              </table>
            </div>

            <OrderSummary items={items} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
