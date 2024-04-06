"use client";
import React, { HTMLAttributes, useRef } from "react";
import { watchImg, rightImg } from "../utils";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";
const Highlights = () => {
  const container = useRef<any>();

  useGSAP(
    () => {
      gsap.to("#title", {
        opacity: 1,
        y: 0,
        delay: 1.5,
      });
      gsap.to(".title", {
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: 0.25,
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      id="highlights"
      className="w-full h-full overflow-hidden common-padding
    bg-[#1B1B1B]"
    >
      <div className="w-screen">
        <div className="mb-12 w-full flex items-end justify-between px-10 max-w-screen-xl">
          <h1 id="title" className="section-heading opacity-0">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <p className="link title">watch the film</p>
            <Image
              src={watchImg}
              alt="watch"
              width={20}
              height={20}
              className="mr-2"
            />
            <p className="link title">watch the event</p>
            <Image
              src={rightImg}
              alt="right img"
              width={10}
              height={10}
              className="ml-2"
            />
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
