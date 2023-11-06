"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { CldVideoPlayer } from "next-cloudinary";

const Banner = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <section
      className="w-full grid grid-cols-1 items-center lg:grid-cols-9 bg-[rgba(250,250,250,0.5)]  md:max-w-[1229px] md:mx-auto h-[90vh]
      space-y-1 gap-y-1 sticky top-0 justify-items-stretch it sm:text-start mt-14 md:mt-2 lg:mt-6"
    >
      {/* {isTabletOrMobile && (
        <CldVideoPlayer
          autoPlay="true"
          loop
          muted
          className="w-full h-full absolute top-0 left-0 -z-10 bg-[rgba(0,0,0,0.5)]"
          id="sea-turtle"
          width={"1920"}
          height={"1080"}
          src="../../videos/bgvid.mp4"
        />
      )} */}
      <div className="w-full grid col-span-5 order-1 col-start-1 lg:justify-self-start space-y-6 gap-y-4">
        <div className="w-[100%] flex mt-6 lg:mt-0 flex-col px-8 lg:text-start text-center before:absolute before:h-[300px] lg:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] lg:after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className="text-5xl tracking-[2px] justify-self-start md:text-7xl md:leading-[6rem] text-black font-[900] sm:text-[24px] ">
            {" "}
            Empower your Vision{" "}
          </h1>
          <span className="text-[18px] text-black font-[600] md:text-[25px] mt-8">
            with the New iphone 15 pro
          </span>
        </div>
        <div className="flex items-center lg:justify-start justify-center gap-x-4 w-[100%] px-8">
          <Link href={"#products"} scroll={true}>
            <Button
              title="Be Pro"
              width="w-[95px]"
              onClick={() => {}}
              padding="px-4"
              bg="bg-black"
              color="text-white"
              weight="font-[700]"
            ></Button>
          </Link>
          <Link href={"#products"}>
            <Button
              title="Explore Our Shop"
              width="w-content"
              onClick={() => {}}
              padding="px-4"
              bg=""
              color="text-black"
              weight="font-[500]"
            ></Button>
          </Link>
        </div>
      </div>
      <div
        className="lg:col-span-4 order-2 relative h-[450px] w-[100%] lg:w-[550px] sm:w-[100%] transition-all duration-100 
          md:line md:h-[550px] md:w-[850px] md:block mt-2 md:mt-0 
          place-items-center before:absolute before:h-[200px] lg:before:w-[400px] before:w-[50px] lg:before:-translate-x-1/4 before:translate-x-1/3 text-center before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] md:after:w-[280px] md:after:translate-x-1/4 after:w-[200px] after:translate-x-1/6 after:bg-gradient-conic after:from-pink-800 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
      >
        {isTabletOrMobile ? (
          <Image
            src="/iphone3.png"
            alt="iphone 14 pro max"
            className="object-contain relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            fill
          />
        ) : (
          <Image
            src="/appleflat.png"
            alt="iphone 14 pro max"
            className="object-contain relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            fill
          />
        )}
      </div>
    </section>
  );
};

export default Banner;
