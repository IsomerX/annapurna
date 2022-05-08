import React from "react";
import LocationCard from "../locationCard";
import Map from "./map";

const Dashboard = () => {
  return (
    <div className="w-[70%] flex flex-col gap-8 overflow-y-scroll justify-between">
      <div className="px-10 pt-10 flex flex-col gap-8">
        <div className="text-5xl font-pop">Hey, {"Ayush Karir"}</div>
        <div className="flex gap-4 max-w-full flex-wrap overflow-y-scroll pb-10">
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <LocationCard />
        </div>
      </div>
      <div className="w-full h-[50vh]">
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
