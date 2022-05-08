/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between p-8">
      <Link href="/" passHref>
        <img
          src="/static/images/logo_text_right_3.png"
          alt=""
          className="h-20 hover:cursor-pointer"
        />
      </Link>
      <Link passHref href="/signup">
        <div className="flex gap-2 cursor-pointer">
          <img src="/static/images/user.svg" alt="" className="h-[24px]" />
          <span>Sign Up / Login</span>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
