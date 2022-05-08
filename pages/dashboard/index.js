import React, { useEffect } from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";
import { useMoralis } from "react-moralis";
import Router from "next/router";
import Dashboard from "../../components/sections/Dashboard";

function Index() {
  const { isAuthenticated, logout } = useMoralis();

  useEffect(() => {
    if (!isAuthenticated) Router.replace("/");
  }, [isAuthenticated]);

  return (
    <div className="h-[100vh] min-w-full flex">
      <DashboardSideBar isActive={1} />
      <Dashboard />
      {/* <DashboardMainPage /> */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Index;
