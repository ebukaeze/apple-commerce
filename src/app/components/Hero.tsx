import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { url } from "inspector";
export const Hero = () => {
  return (
    <div
      className={`w-full h-[80vh] bg-contain bg-center flex flex-col items-center justify-start`}
      style={{
        backgroundImage: `url('/macbook.jpg')`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "[80vh]",
      }}
    >
      <div className="flex text-white items-center flex-col justify-center p-8">
        <h1 className="text-4xl sm:text-6xl font-medium mb-2">MacBook Pro</h1>
        <p className="text-2xl sm:text-3xl font-sm ">
          {" "}
          The New SuperCharged M2 Chip
        </p>
        <div className="flex w-[100%] items-center justify-center p-4">
          <Link
            href="/"
            className="text-blue-600  hover:text-blue-700 text-1xl sm:text-1.5xl"
          >
            Learn more
          </Link>
          <span>
            <ChevronRightIcon className="w-3 h-3 sm:h-5 sm:w-5 text-blue-600 transform hover:translate-x-2 duration-75 ml-1" />
          </span>
        </div>
      </div>
      {/* <div className='absolute flex left-[37%] mx-auto sm:w-[439px] sm:h-[500px] w-[339px] h-[400px] items-center justify-center ' >
        <Image src='/mac1.png' alt='MacBook Pro' fill className='object-contain fixed'/>
        </div> */}
    </div>
  );
};
