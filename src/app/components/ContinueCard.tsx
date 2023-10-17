"use client";
import {
  ClipboardDocumentCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const ContinueCard = () => {
  const [active, setActive] = useState(true);
  console.log(active);
  const cancelCart = () => setActive(!active);
  return (
    <>
      {active && (
        <div
          className="overviewLayout flex items-center justify-center transition ease-in-out duration-150 delay-75"
          onClick={() => setActive(false)}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-[360px] h-[450px] bg-white rounded-xl flex flex-col items-center justify-start py-4">
              <div className="absolute top-2 right-2 ">
                <XMarkIcon
                  height={16}
                  width={16}
                  onClick={() => setActive(!active)}
                />
              </div>
              <ClipboardDocumentCheckIcon
                height={102}
                width={98}
                color="gray"
              />
              <h2 className="text-lg font-semibold opacity-50">Added to Bag</h2>
              <p className="text-base align-middle text-center space-y-10 py-6">
                The Product has been successfully added to the shopping bag
              </p>
              <div className="flex flex-col space-y-4 mt-12">
                <button
                  onClick={() => setActive(false)}
                  className="w-[100%] outline border-2 rounded-md px-8 py-2 cursor-pointer"
                >
                  Continue Shopping
                </button>
                <Link href={"/checkout"}>
                  <button
                    className="w-[100%] px-8 py-2 rounded-md bg-black text-slate-300 
                  cursor-pointer hover:bg-gray-700"
                  >
                    View Bag & Checkout
                  </button>
                </Link>
              </div>
              <div className="relative flex w-[100%]"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContinueCard;
