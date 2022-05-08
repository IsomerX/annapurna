import React, { useEffect } from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";
import { useMoralis } from "react-moralis";
import Router from "next/router";

function Index() {
  const { isAuthenticated, logout } = useMoralis();

  useEffect(() => {
    if (!isAuthenticated) Router.replace("/");
  }, [isAuthenticated]);

  return (
    <div>
      <DashboardSideBar />
      {/* <DashboardMainPage /> */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Index;
