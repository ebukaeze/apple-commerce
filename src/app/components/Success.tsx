"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { Currency } from "react-tender";
import { useMediaQuery } from "react-responsive";

interface Props {
  products: StripeProduct[];
  sessionId: string;
}

const Success = ({ products, sessionId }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  //show order summary to be always true
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };
  return (
    <>
      <section
        className="order-2 lg:col-span-5 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16
            pt-16 xl:pl-16 2xl:pl-44 bg-white"
      >
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 transition cursor-pointer hidden lg:inline-flex">
            <Image
              src="/apple2.png"
              alt="apple"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="w-full divide-y-4 divide-gray-300 mx-4 h-1 shadow-md border border-gray-300 p-0 bg-gray-200 rounded-md opacity-10"></div>
        <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              Order #{sessionId?.slice(-5)}
            </p>
            <h4 className="text-lg">
              Thank you{" "}
              {/* { session ? session_id.user?.name?.split(" ")[0] : "Guest"} */}
            </h4>
          </div>
        </div>
        <div
          className="my-4 mx-4 divide-y divide-gray-300 rounded-md border 
            border-gray-400 p-4 lg:ml-14"
        >
          <div className="space-y-2 pb-3">
            <p className="font-medium text-base"> Your order is comfirmed</p>
            <p className="text-sm text-gray-600">
              We've accepted your order, and the order is getting ready. Come
              back to this page for update on your shipment status
            </p>
          </div>
          <div className="p-3 text-sm">
            <p className="font-medium text-gray-600"> Order tracking number:</p>
            <p>Oyk08248992</p>
          </div>
        </div>
        <div
          className="my-4 mx-4 rounded-md border 
            border-gray-400 p-4 lg:ml-14"
        >
          <p>Order updates</p>
          <p className="text-sm text-gray-600">
            You'll get shipping and delivery updates by email
          </p>
        </div>
        <div
          className="w-full flex lg:flex-row items-center lg:gap-x-2 justify-center
            lg:justify-between mx-auto lg:max-w-xl lg:space-y-4 max-w-[94%]"
        >
          <p className="hidden lg:inline-flex">Need help? Contact us</p>
          {mounted && (
            <button
              className={`${
                isTabletOrMobile ? "w-full" : undefined
              } ease group inline-flex relative py-4 px-3 bg-stone-800 text-[18px] text-white
            font-medium rounded-lg cursor-pointer items-center justify-center box-border outline-1 
    border border-black hover:bg-gray-800 hover:text-white transition-all duration-100`}
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </button>
          )}
        </div>
      </section>
      {mounted && (
        <section
          className="w-full lg:order-2 order-1 mx-auto max-w-xl pb-2 lg:pb-12 lg:mx-0 lg:max-w-none lg:pr-16
                lg:pt-16 xl:pl-16 2xl:pl-44 lg:overflow-y-scroll border-1 border-gray-300 bg-[#fafafa]
                lg:border-1 lg:col-span-4 lg:border-0 px-4"
        >
          <div
            className={`w-full ${
              showOrderSummaryCondition && "border-b"
            } border-gray-400 lg:hidden text-sm mb-3 bg-gray-50 py-4 px-3`}
          >
            <div className="flex items-center justify-between w-full flex-row max-w-xl mx-auto ">
              <button
                onClick={handleShowOrderSummary}
                className="flex space-x-4"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <p className="text-sm md:text-base lg:text-lg text-blue-500">
                  Show Order Summary
                </p>
                {showOrderSummaryCondition ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </button>
              <p className="text-xl text-[black] font-medium">
                {" "}
                <Currency value={subtotal + 20} currency="usd" />
              </p>
            </div>
          </div>
          {showOrderSummaryCondition && (
            <div
              className=" divide-y border-gray-300 px-4 py-4 lg:mx-0
                        lg:max-w-lg lg:px-10 lg:py-16"
            >
              <div className="">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 text-sm font-medium mb-3"
                  >
                    <div
                      className="relative h-16 w-16 flex items-center justify-center rounded-md border
                                    border-gray-300 bg-[#f1f1f1} text-xs text-white"
                    >
                      <div className="relative h-7 w-7 animate-bounce mb-3 rounded-md">
                        <Image
                          src="/apple2.png"
                          alt={product.description}
                          width={30}
                          height={20}
                        />
                      </div>
                      <div
                        className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center 
                                        rounded-full bg-[gray] text-sm"
                      >
                        {product.quantity}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <p>{product.description}</p>
                      <p className="font-medium text-xs">
                        <Currency
                          value={product.price.unit_amount / 100}
                          currency="usd"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-1 py-4 mx-4">
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Subtotal</p>
                  <p className="font-medium">
                    <Currency value={subtotal} currency="usd" />
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Discount</p>
                  <p className="font-medium">
                    <Currency value={0} currency="usd" />
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Shipping</p>
                  <p className="font-medium">
                    <Currency value={20} currency="usd" />
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <p className="text-[gray]">Total</p>
                  <p className="flex items-center gap-x-2 text-xs text-[gray]">
                    USD
                    <span className="text-xl font-medium text-[black]">
                      <Currency value={subtotal + 20} currency="usd" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Success;
