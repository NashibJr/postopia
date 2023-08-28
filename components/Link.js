import Link from "next/link";
import React from "react";

const DropdownLink = ({ pathName, label, handleCloseToggle }) => {
  return (
    <Link
      href={pathName}
      className="text-gray-700 block px-4 py-2 text-sm hover:bg-green-600 hover:text-black text-end font-medium"
      role="menuitem"
      tabIndex="-1"
      id="menu-item-0"
      onClick={handleCloseToggle}
    >
      {label}
    </Link>
  );
};

export default DropdownLink;
