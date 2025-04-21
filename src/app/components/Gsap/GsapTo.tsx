import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  const container = useRef<any>();

  useGSAP(
    () => {
      gsap.to(".box", {
        x: 250,
        rotation: 360,
        repeat: -1,
        yoyo: true,
        duration: 2,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full flex h-44 items-center justify-center"
    >
      <div className="box w-28 h-28 bg-blue-700">Hello</div>
    </div>
  );
};

export default GsapTo;
