"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const Banner = () => {
  return (
    <section
      className="w-full grid grid-cols-1 items-center lg:grid-cols-9 bg-[rgba(250,250,250,0.5)]  md:max-w-[1229px] md:mx-auto h-[90vh]
      space-y-1 gap-y-1 sticky top-0 justify-items-stretch sm:text-start mt-8 xs:mt-12 md:mt-2 lg:mt-8"
    >
      <div className="w-full grid col-span-5 order-1 col-start-1 lg:justify-self-start space-y-6 gap-y-4">
        <div className="w-[100%] flex mt-8 md:mt-4 lg:mt-0 flex-col px-8 lg:text-start text-center before:absolute before:h-[300px] lg:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] lg:after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="sm:text-6xl xs:text-3xl text-5xl tracking-[2px] justify-self-start md:text-7xl md:leading-[6rem] text-black md:font-[900] sm:font-[700] font-[600] sm:text-[54px] lg:font-[900] ">
            {" "}
            Empower your Vision{" "}
          </h1>
          <span className="sm:text-[18px] text-[16px] text-black md:font-[600] font-[500] md:text-[25px] mt-8">
            with the New iphone 15 pro
          </span>
        </div>
        <div className="flex items-center lg:justify-start justify-center gap-x-4 w-[100%] px-8">
          <Link href={"#products"} scroll={true}>
            <Button
              title="Be Pro"
              width="w-max "
              onClick={() => {}}
              padding="px-2 md:px-4"
              fontSize="lg:text-lg sm:text-base text-[14px]"
              bg="bg-black"
              color="text-white"
              weight="lg:font-[500] sm:font-[400] font-[400]"
            ></Button>
          </Link>
          <Link href={"#products"}>
            <Button
              title="Explore Our Shop"
              width="w-content"
              onClick={() => {}}
              padding="px-4"
              fontSize="lg:text-lg sm:text-base text-[14px]"
              bg=""
              color="text-black"
              weight="font-[500]"
            ></Button>
          </Link>
        </div>
      </div>
      <div
        className="lg:col-span-4 order-2 relative h-[450px] w-[100%] lg:w-[550px] sm:w-[100%] transition-all duration-100 
          md:line md:h-[550px] md:w-[850px] hidden md:flex mt-2 md:mt-0 
          place-items-center before:absolute before:h-[200px] lg:before:w-[400px] before:w-[50px] lg:before:-translate-x-1/4 before:translate-x-1/3 text-center before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:w-[280px] md:after:translate-x-1/4 after:w-[200px] after:translate-x-1/6 after:bg-gradient-conic after:from-pink-800 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
      >
        <Image
          src="/iphone3.png"
          alt="iphone 14 pro max"
          className="object-contain flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          fill
        />
      </div>
      <div
        className="lg:col-span-4 order-2 flex md:hidden relative h-[450px] w-[100%] lg:w-[550px] sm:w-[100%] transition-all duration-100 
          md:line md:h-[550px] md:w-[850px] mt-2 md:mt-0 
          place-items-center before:absolute before:h-[200px] lg:before:w-[400px] before:w-[50px] lg:before:-translate-x-1/4 before:translate-x-1/3 text-center before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:w-[280px] md:after:translate-x-1/4 after:w-[200px] after:translate-x-1/6 after:bg-gradient-conic after:from-pink-800 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
      >
        <Image
          src="/appleflat.png"
          alt="iphone 14 pro max"
          className="object-contain  h-auto w-autoflex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          fill
        />
      </div>
    </section>
  );
};

export default Banner;
