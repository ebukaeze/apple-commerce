import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../redux/cartSlice";
import { Currency } from "react-tender";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Stripe from "stripe";
import getStripe from "../libs/get-stripe";
import { loadStripe } from "@stripe/stripe-js";
import { StripeError } from "@stripe/stripe-js";
import Loading from "../checkout/loading";

interface Props {
  items: Product[];
}

const OrderSummary = ({ items }: Props) => {
  //loading state goes here
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const cartTotal = useSelector(selectCartTotal);

  //add discount to products above 1
  const discount = () => {
    const amount = 50;
    if (items.length >= 2) {
      return amount;
    } else return 0;
  };

  const createCheckoutSession = async () => {
    setLoading(true);

    //step 1: load stripe
    const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
    const stripe = await getStripe();

    // step 2: make a post fetch api call to /checkout-session handler
    const result = await fetch("/api/checkout-session", {
      method: "POST", // Post, Get, Update, Delete etc
      mode: "cors", //no cors, *cors, same origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(items || {}), //body data must match content type
    });

    //Internal Server Error
    if ((result as any).statusCode === 500) {
      console.error((result as any).message);
      return;
    }
    // step 3: get the data and redirect to checkout using the sessionId
    const data = (await result.json()) as Stripe.Checkout.Session;
    const sessionId = data.id!;
    stripe?.redirectToCheckout({ sessionId });

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    setLoading(false);
  };
  console.log(createCheckoutSession);
  return (
    <div
      className="flex flex-col flex-1 bg-white items-start w-full sm:w-[50%] h-max rounded-md p-3
        shadow-sm space-y-3"
    >
      <div className="pb-6">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
      </div>
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-slate-500">Total Quantity</h2>
        <h2 className="font-semibold">{items.length}</h2>
      </div>
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-slate-500">Subtotal</h2>
        <h2 className="font-semibold">
          <Currency value={cartTotal} currency="USD" />
        </h2>
      </div>
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-slate-500">Discount</h2>
        <h2 className="font-semibold">-${discount()}</h2>
      </div>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-slate-500">Shipping & Handling</h2>
        <h2 className="font-semibold">FREE</h2>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-x-1 lg:flex-row items-center">
          <p> Estimated Tax For: </p>
          <p className="text-sm flex cursor-pointer items-end text-blue-500 hover:underline">
            Enter zip code
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <p className="font-semibold">$ -</p>
      </div>
      <div className="divide-y-2 divide-solid h-2 w-full flex border-b"></div>
      <div className="w-full flex items-center justify-between mt-3">
        <h2 className="text-black mt-4 font-semibold">Total to pay</h2>
        <h2 className="font-semibold text-2xl">
          <Currency value={cartTotal - discount()} currency="USD" />
        </h2>
      </div>
      <div className="flex w-full flex-col ">
        <div className="flex mb-3">
          <p className="font-medium">How would you like to check out?</p>
        </div>
        <div className="flex flex-col bg-slate-100">
          <div className="flex flex-col items-center justify-center">
            <p>Pay in full</p>
            <p className="font-semibold">
              <Currency value={cartTotal - discount()} currency="USD" />
            </p>
          </div>
          <div className="w-full flex mt-8 uppercase">
            <Suspense fallback={<Loading />}>
              <button
                className=" ease group inline-flex relative py-4 w-full px-3 bg-stone-800 text-[18px] text-white
            font-medium rounded-lg cursor-pointer items-center justify-center box-border outline-1 
    border border-black hover:bg-gray-800 hover:text-white transition-all duration-100"
                onClick={createCheckoutSession}
              >
                {`${loading ? "Loading..." : "CHECKOUT"}`}
              </button>
            </Suspense>
          </div>
        </div>
        <div className="flex flex-1 justify-between items-center w-full cursor-pointer text-blue-500 mt-4 text-sm">
          <button onClick={() => setShow(!show)}>Other payment options</button>
          {show ? (
            <ChevronDownIcon className="h-6 w-6" />
          ) : (
            <ChevronUpIcon className="h-6 w-6" />
          )}
        </div>
        <div
          className={`${
            show
              ? "flex flex-col h-max w-full transition transform delay-75"
              : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center">
            <p>Pay monthly</p>
            <p>with Apple Card</p>

            <p className="font-semibold">
              <Currency value={cartTotal / 6} currency="USD" />
              /mo. at 0% APR
            </p>
          </div>
          <Link href="/" className="w-full flex mt-8">
            <Suspense fallback={"Loading..."}>
              <button
                className="w-full px-3 bg-stone-800 text-[18px] text-white
            font-medium flex items-center justify-center"
                onClick={createCheckoutSession}
              >
                CHECKOUT
              </button>
            </Suspense>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
