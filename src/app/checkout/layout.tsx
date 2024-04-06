import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "./loading";

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white">
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </section>
  );
};

export default CheckoutLayout;
