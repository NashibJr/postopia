"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/download.png";
import SmallDevices from "./smallDevices";
import LargeDevices from "./LargeDevices";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);

  const hanldeToggle = () => setToggle((prevState) => !prevState);
  const handleCloseToggle = () => setToggle(false);

  return (
    <nav className="mb-8 pt-3 flex flex-row justify-between w-full ">
      <Link href="/" className="flex">
        <Image
          src={logo}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        <i className="mx-2 font-bold header-text sm:flex hidden">postopia</i>
      </Link>

      {/* for small  devices */}

      <div className="relative inline-block text-left sm:hidden">
        <SmallDevices
          toggle={toggle}
          hanldeToggle={hanldeToggle}
          handleCloseToggle={handleCloseToggle}
        />
      </div>

      {/* larger devices */}

      <div className="sm:flex hidden">
        <LargeDevices />
      </div>
    </nav>
  );
};

export default Header;
