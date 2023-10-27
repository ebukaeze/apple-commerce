//"use client";
import React from "react";
import { fetchLineItems } from "../libs/fetchLineItems";
import Success from "../components/Success";
import { error } from "console";

interface Props {
  products: StripeProduct[];
}
const fetchProducts = async (sessionId: string) => {
  const response = await fetchLineItems(sessionId);

  return response;
};
const success = async ({
  searchParams,
}: {
  searchParams: { session_id: string };
}) => {
  const products = await fetchProducts(searchParams.session_id);

  console.log(products);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-9">
      <Success products={products} sessionId={searchParams.session_id} />
    </main>
  );
};

export default success;
