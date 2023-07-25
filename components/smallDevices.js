import DropdownLink from "./Link";
import logo from "@/public/download.png";
import Image from "next/image";
import Button from "./Button";

const SmallDevices = ({ toggle, hanldeToggle, handleCloseToggle }) => {
  return (
    <>
      <Image
        src={logo}
        alt=""
        width={50}
        height={50}
        className="rounded-full cursor-pointer"
        onClick={hanldeToggle}
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
            <DropdownLink label="Create post" pathName="/newpost" />
            <DropdownLink label="Signout" pathName="/signout" />
            <Button
              class_name="bg-red-700 w-full rounded-full mt-1 p-1.5 text-white font-semibold hover:opacity-60"
              hanldeClick={handleCloseToggle}
              label="Close"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SmallDevices;
