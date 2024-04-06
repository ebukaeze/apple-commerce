"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero2 = () => {
  const container = useRef<any>();
  const container2 = useRef<any>();
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? "/videos/smallHero.mp4" : "/videos/hero.mp4"
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc("/videos/smallHero.mp4");
    } else {
      setvideoSrc("/videos/hero.mp4");
    }
  };

  useEffect(() => {
    window.addEventListener("reset", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(
    () => {
      gsap.to("#hero", {
        opacity: 1,
        ease: "back.in",
        delay: 1.5,
      });
      gsap.to(".cta", {
        opacity: 1,
        y: -50,
        delay: 1.5,
      });
    },
    { scope: container }
  );
  return (
    <section
      ref={container}
      className="w-full nav-height bg-black pt-24 h-[100dvh] sticky top-0"
    >
      <div className="h-5/6 w-full flex-center flex-col md:mt-8 mt-12">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 pointer-events-none">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      </div>
      <div className=" cta flex flex-col items-center text-white opacity-0 translate-y-20 -mt-2 z-20">
        <a href="#products" className="btn">
          buy
        </a>
        <p className="font-normal text-lg text-white">$999</p>
      </div>
    </section>
  );
};

export default Hero2;
