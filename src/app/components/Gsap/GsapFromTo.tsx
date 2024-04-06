import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapFromTo = () => {
  const container = useRef<any>();

  useGSAP(
    () => {
      gsap.fromTo(
        ".circ",
        {
          width: 30,
          height: 30,
          borderRadius: "100%",
          background: "red",
          repeat: -1,
          rotateZ: 100,
          yoyo: true,
          delay: 1,
          ease: "bounce.inOut",
        },
        {
          width: 80,
          height: 80,
          borderRadius: "100%",
          background: "blue",
          repeat: -1,
          rotateZ: 100,
          yoyo: true,
          delay: 1,
          ease: "power1.inOut",
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full flex h-44 items-center justify-center"
    >
      <div className="circ"></div>
    </div>
  );
};

export default GsapFromTo;
