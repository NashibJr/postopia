import Link from "next/link";
import React from "react";

const DropdownLink = ({ pathName, label }) => {
  return (
    <Link
      href={pathName}
      className="text-gray-700 block px-4 py-2 text-sm hover:bg-green-600 hover:text-black"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-0"
    >
      {label}
    </Link>
  );
};

export default DropdownLink;
