/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useMoralis } from "react-moralis";

const DashboardSideBar = ({ isActive }) => {
  const { logout, user } = useMoralis();
  return (
    <div className="w-[30%] bg-white flex flex-col border-r-[2px] border-[#00000010]">
      {/* <span>logo</span> */}
      <Link href="/" passHref>
        <img
          src="/static/images/logo_text_right_3.png"
          alt=""
          className="w-[40%] my-4 mx-auto hover:cursor-pointer"
        />
      </Link>

      <img
        src="/static/images/man_smiling.png"
        alt=""
        className="w-1/2 my-4 mx-auto"
      />

      <span className="mx-auto my-4 font-pop font-bold text-xl">
        {`${user && user.get("username").substring(0, 7)}...`}
      </span>
      <div className="option_box flex flex-col gap-8 mx-auto my-6 w-[80%] py-1 font-sora">
        {/* <Link href="/calendar" passHref> */}
        <div
          className={`flex gap-6 w-full py-3 items-center px-4 cursor-pointer rounded-lg ${
            isActive === 0 && "bg-black text-white"
          }`}
        >
          <div className="w-2/12 grid place-items-center">
            <img
              src="/static/images/calender_vector.png"
              alt=""
              className="h-[80%]"
            />
          </div>
          <span className="text-xl text-center">Calender</span>
        </div>
        {/* </Link> */}
        <Link href="/dashboard" passHref>
          <div
            className={`flex gap-6 w-full py-3 items-center px-4 cursor-pointer rounded-lg ${
              isActive === 1 && "bg-black text-white"
            }`}
          >
            <div className="w-2/12 grid place-items-center">
              <img
                src="/static/images/dashboard_vector.png"
                alt=""
                className="h-[80%]"
              />
            </div>
            <span className="text-xl text-center ">Dashboard</span>
          </div>
        </Link>
        {/* <Link href="/edit" passHref> */}
        <div
          className={`flex gap-6 w-full py-3 items-center px-4 cursor-pointer rounded-lg ${
            isActive === 2 && "bg-black text-white"
          }`}
        >
          <div className="w-2/12 grid place-items-center">
            <img
              src="/static/images/edit_profile_vector.png"
              alt=""
              className="h-[80%]"
            />
          </div>
          <span className="text-xl text-center">Edit Profile</span>
        </div>
        {/* </Link> */}
        <Link href="/host" passHref>
          <div
            className={`flex gap-6 w-full py-3 items-center px-4 cursor-pointer rounded-lg ${
              isActive === 3 && "bg-black text-white"
            }`}
          >
            <div className="w-2/12 grid place-items-center">
              <img
                src="/static/images/edit_profile_vector.png"
                alt=""
                className="h-[80%]"
              />
            </div>
            <span className="text-xl text-center">Host</span>
          </div>
        </Link>
        <div
          className={`flex gap-6 w-full py-3 items-center px-4 cursor-pointer rounded-lg bg-green-300`}
          onClick={() => logout()}
        >
          <div className="w-2/12 grid place-items-center">
            <img src="/static/images/logout.svg" alt="" className="h-[80%]" />
          </div>
          <span className="text-xl text-center">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
