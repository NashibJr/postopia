"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/download.png";
import SmallDevices from "./smallDevices";
import LargeDevices from "./LargeDevices";
import Button from "./Button";
import app from "@/app/api/auth/auth";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  beforeAuthStateChanged,
} from "firebase/auth";
import client from "@/_app/client/client";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  const [image, setImage] = React.useState("");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  React.useEffect(() => {
    const observeUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          console.log("User is signed out");
        }
        console.log(user);
      });
    };
    observeUser();
    return beforeAuthStateChanged(auth, () => console.log("observer removed"));
  }, []);

  const handleToggle = () => setToggle((prevState) => !prevState);
  const handleCloseToggle = () => setToggle(false);
  const handleSignin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      if (response) {
        await client.post("/auth", response.user);
        setImage(response.user.photoURL);
      }
      setIsLoggedin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="mb-8 pt-3 flex flex-row justify-between w-full ">
      <Link href="/" className="flex">
        <Image
          src={logo}
          alt=""
          width={50}
          height={50}
          className="rounded-full cursor-pointer"
        />
        <i
          className="mx-2 font-bold header-text sm:flex hidden"
          style={{ fontSize: "1.3em" }}
        >
          postopia
        </i>
      </Link>
      {isLoggedin ? (
        <>
          {/* for small  devices */}

          <div className="relative inline-block text-left sm:hidden">
            <SmallDevices
              toggle={toggle}
              handleToggle={handleToggle}
              handleCloseToggle={handleCloseToggle}
              imageURL={image}
            />
          </div>

          {/* larger devices */}

          <div className="sm:flex hidden">
            <LargeDevices handleSignout={handleSignOut} imageURL={image} />
          </div>
        </>
      ) : (
        <Button
          class_name="rounded-full text-white p-2 mx-1 border-1 border-white w-28 font-semibold signout-btn hover:opacity-70"
          label="Signin"
          hanldeClick={handleSignin}
        />
      )}
    </nav>
  );
};

export default Header;
