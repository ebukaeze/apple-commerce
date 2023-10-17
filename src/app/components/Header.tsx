"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartItems } from "../redux/cartSlice";

const Header = () => {
  const items = useSelector(selectCartItems);
  return (
    <header className="w-full h-14 flex items-center justify-around fixed top-0 left-0 z-50 border-none lg:fixed lg:w-full glassMorphism">
      <nav className="w-full flex px-4 items-center justify-around text-zinc-200">
        <div className="flex items center">
          <Link href={"/"}>
            <Image
              src={"/apple2.png"}
              alt="apple"
              width={18}
              height={18}
              className="object-contain invert"
            />
          </Link>
        </div>
        <div className="hidden items-center md:flex justify-center space-x-6 ">
          <ul className="flex items-center px-2">
            <li>
              <Link href="/#products" scroll={true} className="headerLink">
                Product
              </Link>
            </li>
            <li>
              <Link href="/explore" className="headerLink">
                Explore
              </Link>
            </li>
            <li>
              <a href="/" className="headerLink">
                Support
              </a>
            </li>
            <li>
              <a href="/" className="headerLink">
                Businesses
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-x-6 mx-4 px-3">
          <MagnifyingGlassIcon className="headerIcon" />

          <Link href="/checkout">
            {items.length > 0 && (
              <div className="relative">
                <span
                  className="z-10 absolute -right-1 -top-2 h-4 w-4 rounded-full
                flex items-center text-center justify-center text-xs bg-gradient-to-r from-pink-500
                to-violet-500 p-2"
                >
                  {items.length}
                </span>
              </div>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </Link>
          <UserCircleIcon className="headerIcon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
