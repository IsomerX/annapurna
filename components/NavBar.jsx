/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='w-full flex justify-between p-8'>
        <div>
            <img src="/static/images/logo_text_right_3.png" alt=""  className='h-20'/>
        </div>
        <Link passHref href="/signup">
        <div className='flex flex-row-reverse gap-2 cursor-pointer'>
            <span>
              Sign Up
            </span>
            <img src = "/static/images/user.svg" alt = "" className='w-[24px] mt-[-50px] '/>
        </div>
      </Link>
    </div>
  );
};

export default NavBar