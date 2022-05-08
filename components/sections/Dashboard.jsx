import React, { useEffect, useState } from "react";
import LocationCard from "../locationCard";
import Map from "./map";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/getCompanies")
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  const cardHandler = (e) => {
    
  }

  let cards;

  if (data.length > 0) {
    console.log("data", data);
    cards = data.map((company) => {
      return <LocationCard key={company.id} {...company} />;
    });
  } else {
    return <h2 className="h-full w-full mx-auto grid items-center">Loading...</h2>;
  }

  return (
    <div className="w-[70%] flex flex-col gap-8 overflow-y-scroll justify-between">
      <div className="px-10 pt-10 flex flex-col gap-8">
        <div className="text-5xl font-pop">Hey, {"Ayush Karir"}</div>
        <div className="flex gap-4 max-w-full flex-wrap overflow-y-scroll pb-10">
          {cards}
        </div>
      </div>
      <div className="w-full h-[50vh]">
        <Map data={data}/>
      </div>
    </div>
  );
};

export default Dashboard;

// getprops
