import React from "react";

export const fetchLineItems = async (sessionId: string) => {
  const res = await fetch(`
    ${process.env.NEXT_PUBLIC_BASE_URL}/api/services?session_id=${sessionId}`);

  if (!res) return;

  const data = await res.json();
  const products = data.session.data;
  console.log(products);
  return products;
};
