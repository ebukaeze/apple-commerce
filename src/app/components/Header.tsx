"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import apple from "../../../public/apple.jpg";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const items = useSelector(selectCartItems);
  const [showNavBar, setShowNavBar] = useState(false);
  const router = useRouter();

  //user session
  const { data: session } = useSession();

  useEffect(() => {
    const handleNavBarVisibility = () => {
      window.scrollY > 100 ? setShowNavBar(true) : setShowNavBar(false);
    };

    window.addEventListener("scroll", handleNavBarVisibility);
    return () => {
      window.addEventListener("scroll", handleNavBarVisibility);
    };
  }, []);

  return (
    <header
      className={`w-full h-14 flex items-center justify-around fixed top-0 left-0 z-50 border-none lg:fixed lg:w-full ${
        showNavBar && "glassMorphism"
      } transition-all 0.3s ease-in-out duration-75`}
    >
      <nav
        className={`w-full flex px-4 items-center justify-around ${
          showNavBar ? "text-zinc-200" : "text-gray-800"
        }`}
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/apple2.png"}
              alt="apple"
              width={18}
              height={18}
              className={`object-contain ${showNavBar && "invert"}`}
            />
          </Link>
        </div>
        <div className="hidden items-center md:flex justify-center space-x-6 ">
          <ul className="flex items-center px-2">
            <li>
              <Link
                href="/#products"
                scroll={true}
                className={`headerLink ${showNavBar && "text-zinc-200"}`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className={`headerLink ${showNavBar && "text-zinc-200"}`}
              >
                Explore
              </Link>
            </li>
            <li>
              <a
                href="/"
                className={`headerLink ${showNavBar && "text-zinc-200"}`}
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`headerLink ${showNavBar && "text-zinc-200"}`}
              >
                Businesses
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-x-6 mx-4 px-3">
          <MagnifyingGlassIcon
            className={`h-5 w-5 text-gray-800 opacity-90 hover:opacity-100 cursor-pointer ${
              showNavBar && "text-white"
            }`}
          />

          <Link href="/checkout">
            {items.length > 0 && (
              <div className="relative">
                <span
                  className={`z-10 absolute -right-1 -top-2 h-4 w-4 rounded-full
                flex items-center text-center justify-center text-xs bg-gradient-to-r from-pink-500
                to-violet-500 p-2 text-white`}
                >
                  {items.length}
                </span>
              </div>
            )}
            <ShoppingBagIcon
              className={`h-5 w-5 text-gray-800 opacity-90 hover:opacity-100 cursor-pointer ${
                showNavBar && "text-white"
              }`}
            />
          </Link>
          {session ? (
            <>
              <Image
                src={`${session?.user?.image || "/public/apple2.png"}`}
                width={24}
                height={24}
                onClick={() => router.push("/client")}
                className="h-6 w-6 rounded-full object-contain cursor-pointer"
                alt={`${session?.user?.name}`}
              />
              <span>
                {/* <ArrowLeftOnRectangleIcon
                  className={`h-5 w-5 text-gray-800 opacity-90 hover:opacity-100 cursor-pointer ${
                    showNavBar && "text-white"
                  }`}
                /> */}
                <button
                  className="outline-none w-max border-none bg-transparent text-sm md:text-md"
                  onClick={() => signOut()}
                >
                  signout
                </button>
              </span>
            </>
          ) : (
            <Link href={"/api/auth/signin?callbackUrl=/client"}>
              <UserCircleIcon
                className={`h-5 w-5 text-gray-800 opacity-90 hover:opacity-100 cursor-pointer ${
                  showNavBar && "text-white"
                }`}
              />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
