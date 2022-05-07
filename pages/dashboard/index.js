import React from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";

function index() {
  return (
    <div>
      <DashboardSideBar />
      <DashboardMainPage />
    </div>
  );
}

export default index;
