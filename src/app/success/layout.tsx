import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank you! - Apple",
};

export const dynamicParams = true;

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-slate-50">
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 transition cursor-pointer  lg:hidden">
            <Image
              src="/apple2.png"
              alt="apple"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </header>
      <div>{children}</div>
    </section>
  );
}
