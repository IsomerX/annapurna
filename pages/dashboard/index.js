import React from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";
import Dashboard from "../../components/sections/Dashboard";

function index() {
  return (
    <div className="h-[100vh] min-w-full bg-orange-500 flex">
      <DashboardSideBar />
      <Dashboard />
      {/* <DashboardMainPage /> */}
    </div>
  );
}

export default index;
