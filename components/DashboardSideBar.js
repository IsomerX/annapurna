import React from "react";

const DashboardSideBar = () => {
  return (
    <div className="h-[100vh] min-w-full bg-orange-500 flex">
      <div className="w-[30%] bg-white flex flex-col border-r-2 border-gray-400">
        {/* <span>logo</span> */}
        <img
          src="/static/images/logo_text_right_3.png"
          alt=""
          className="w-[40%] my-4 mx-auto "
        />

        <img
          src="/static/images/man_smiling.png"
          alt=""
          className="w-1/2 my-4 mx-auto"
        />

        <span className="mx-auto my-4 font-pop font-bold text-xl">
          Shelly Bakshi
        </span>
        <div className="option_box flex flex-col gap-8 mx-auto my-6 w-[80%] py-1">
          <div className="flex gap-6 w-full p-2">
            <img
              src="/static/images/calender_vector.png"
              alt=""
              className="h-[80%]"
            />
            <span className="text-xl text-center">calender</span>
          </div>
          <div className="flex gap-6 bg-black w-full p-2 rounded-lg">
            <img
              src="/static/images/dashboard_vector.png"
              alt=""
              className="h-[80%]"
            />
            <span className="text-xl text-center text-white p-1">
              Dashboard
            </span>
          </div>
          <div className="flex gap-6 w-full p-2">
            <img
              src="/static/images/edit_profile_vector.png"
              alt=""
              className="h-[80%]"
            />
            <span className="text-xl text-center">edit profile</span>
          </div>
        </div>
      </div>
      <div className="w-[70%] bg-white flex flex-col">
        <div className="flex bg-white justify-center gap-40 h-[20%] px-0 py-10">
          <div>
            <span className="text-3xl font-medium">
              Hey Shelly, How are you
            </span>
          </div>
          <div className="flex bg-black py-2 px-6 gap-2 rounded-lg">
            <img
              src="/static/images/orange_gem.png"
              alt=""
              className="h-[1.75rem]"
            />
            <span className="text-lg text-white">6, tokens available</span>
          </div>
        </div>
        <div className="h-[40%] bg-white text-center text-2xl font-medium px-0 py-4">
          <span className="underline underline-offset-4">
            Near you carousel
          </span>
        </div>
        <div>Map</div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
