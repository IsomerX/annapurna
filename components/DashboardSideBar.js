import React from "react";

const DashboardSideBar = () => {
  return (
    <div className="h-[100vh] min-w-full bg-orange-500 flex">
      <div className="w-[30%] bg-white flex flex-col">
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
        <div className="option_box flex flex-col gap-8 mx-auto my-10 w-[80%] py-1">
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
    </div>
  );
};

export default DashboardSideBar;
