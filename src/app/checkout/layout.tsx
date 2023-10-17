import React from "react";
import Header from "../components/Header";

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-zinc-50 py-8">
      <Header />
      {children}
    </section>
  );
};

export default CheckoutLayout;
