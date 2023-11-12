import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-full bg-[#161616] px-6 py-4">
      <div
        className="w-full grid md:h-[50vh] h-[50vh] lg:grid-cols-8 md:grid-cols-6 grid-cols-6 grid-rows-2 lg:grid-rows-1 text-gray-200 
         lg:mx-auto lg:max-w-[1234px] text-[12px] py-4"
      >
        <div className="grid-col-start col-span-2">
          <div>
            <h3 className="font-bold text-sm mb-3 text-gray-100">
              About Apple
            </h3>
            <ul className="space-y-1">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Oppurtunity</li>
              <li>Warranty</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>European Job Creation</li>
              <li>Contact Apple</li>
              <li>Find Us</li>
            </ul>
          </div>
        </div>
        <div className="grid-col-start col-span-2 row-span-2">
          <div>
            <h3 className="font-bold text-sm mb-3 text-gray-100">
              Entertainment
            </h3>
            <ul className="space-y-1">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>Apple Store</li>
              <li>Apple Gamee</li>
            </ul>
          </div>
        </div>
        <div className="grid-col-start col-span-2">
          <div>
            <h3 className="font-bold text-sm mb-3 text-gray-100">
              Apple Store
            </h3>
            <ul className="space-y-1">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Summer Camp</li>
              <li>Apple Store App</li>
              <li>Certified Refurbished</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
        </div>
        <div className="grid-col-start col-span-1 hidden md:block">
          <div>
            <h3 className="font-bold text-sm mb-3 text-gray-100">
              Entertainment
            </h3>
            <ul className="space-y-1">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>Apple Store</li>
              <li>Apple Game</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[60%] text-slate-200 flex text-[12px] border-b border-gray-500 mx-auto pb-3">
        <p>More ways to shop</p>{" "}
        <span className="ml-2">
          {" "}
          <a href="/" className="text-blue-400 space-gap-3">
            find an Apple store
          </a>{" "}
          or{" "}
          <a href="/" className="text-blue-400">
            Other retailers
          </a>{" "}
          near you. Or call 08048xxx289
        </span>
      </div>
      <div className="w-[60%] mx-auto flex justify-start pt-3">
        <p className="text-gray-400 text-[12px] flex items-center justify-start">
          Copyright &copy; 2023 Apple Redesign Inc. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
