"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/download.png";
import DropdownLink from "./Link";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="mb-8 pt-3 flex flex-row justify-between w-full ">
      <Link href="/" className="flex">
        <Image
          src={logo}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <i className="mx-2 font-bold header-text sm:flex hidden">postopia</i>
      </Link>
      <div className="relative inline-block text-left">
        <Image
          src={logo}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {toggle && (
            <div className="py-1" role="none">
              <DropdownLink label="Profile" pathName="/profile" />
              <DropdownLink label="Add new Post" pathName="/newpost" />
              <DropdownLink label="Signout" pathName="/signout" />
              <button
                type="button"
                className="bg-red-700 w-full p-1.5 text-white font-semibold hover:opacity-60"
                onClick={() => setToggle(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
