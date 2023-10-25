"use client";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import React, { use } from "react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <div>
      {showScrollButton && (
        <div
          id="scrolToTop"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          style={{
            position: "fixed",
            bottom: "60px",
            right: "60px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            backgroundColor: "rgba(130,128,128,0.8)",

            borderRadius: "100%",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "4em",
            lineHeight: 0,
            textDecoration: "none",
          }}
        >
          <ArrowUpIcon width={50} height={50} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
