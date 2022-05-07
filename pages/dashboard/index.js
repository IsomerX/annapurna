import React from "react";
import DashboardMainPage from "../../components/DashboardMainPage";
import DashboardSideBar from "../../components/DashboardSideBar";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
function Index() {
  const { isAuthenticated, logout } = useMoralis();

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated, router]);

  return (
    <div>
      <DashboardSideBar />
      {/* <DashboardMainPage /> */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Index;
