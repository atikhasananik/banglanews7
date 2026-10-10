"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavRightSection = () => {
  const Router = useRouter();

  const [menuCliecked, setMenuCliecked] = useState<boolean>(false);
  const { data: session } = useSession();
  const handleMenuBtn = () => {
    setMenuCliecked(!menuCliecked);
  };

  const centeralBtnClick = () => {
    setMenuCliecked(false);
  };

  const handleSignOutBtn = () => {
    signOut();
    setMenuCliecked(false);
    Router.push("/");
  };

  return (
    <>
      {!session?.user ? (
        <div className="absolute right-0 flex items-center mr-4 ">
          <span onClick={handleMenuBtn} className="sm:hidden">
            {menuCliecked ? <X></X> : <Menu></Menu>}
          </span>
          <div
            className={`flex items-center gap-2 justify-end  ${menuCliecked ? "max-sm:bg-white max-sm:border  max-sm:border-gray-300 max-sm:shadow-xl max-sm:p-4 max-sm:w-40 max-sm:rounded-lg max-sm:absolute max-sm:-bottom-27 max-sm:right-0 max-sm:flex-col" : "hidden"} sm:flex `}
          >
            <Link href={"/sign-in"}>
              <button
                onClick={() => {
                  centeralBtnClick();
                }}
                className="cursor-pointer"
              >
                সাইন ইন
              </button>
            </Link>
            <Link href={"sign-up"}>
              <button
                onClick={() => {
                  centeralBtnClick();
                }}
                className="btn bg-red-700 text-white"
              >
                সাইন আপ
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="absolute right-0 flex items-center mr-4">
          <span onClick={handleMenuBtn} className="sm:hidden">
            {menuCliecked ? <X></X> : <Menu></Menu>}
          </span>

          <div
            className={`flex items-center gap-2 justify-end  ${menuCliecked ? "max-sm:bg-white max-sm:border  max-sm:border-gray-300 max-sm:shadow-xl max-sm:p-4 max-sm:w-60 max-sm:rounded-lg max-sm:absolute max-sm:-bottom-27 max-sm:right-0 max-sm:flex-col" : "hidden"} sm:flex `}
          >
            <p className="font-semibold italic text-gray-500 ">
              {session?.user.name.toUpperCase()}{" "}
            </p>
            <button
              onClick={() => {
                handleSignOutBtn();
                centeralBtnClick();
              }}
              className="btn bg-red-700 text-white"
            >
              সাইন আউট
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavRightSection;
