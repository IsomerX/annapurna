import React, { useEffect, useState } from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";
import { useMoralis } from "react-moralis";
import Router from "next/router";
import Dashboard from "../../components/sections/Dashboard";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Index() {
  const { isAuthenticated, logout } = useMoralis();
  const [loading, setLoading] = useState(true);

  // wait 1 sec to check authentication status
  useEffect(() => {
    console.log("Auth: ", isAuthenticated);
    if (loading) {
      sleep(1000).then(() => setLoading(false));
    } else {
      !isAuthenticated && Router.replace("/");
    }
  }, [isAuthenticated, loading, setLoading]);

  return (
    <div className="h-[100vh] min-w-full flex">
      {!loading ? (
        <>
          <DashboardSideBar isActive={1} />
          <Dashboard />
        </>
      ) : (
        <h2 className="m-auto">Loading ...</h2>
      )}
      {/* <DashboardMainPage /> */}
    </div>
  );
}

export default Index;
