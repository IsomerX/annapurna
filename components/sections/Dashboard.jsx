import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import LocationCard from "../locationCard";
import Map from "./map";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const { user } = useMoralis();

  useEffect(() => {
    fetch("/api/getCompanies")
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  const cardHandler = (uid) => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
      }),
    });
  };

  let cards;

  if (data.length > 0) {
    cards = data.map((company) => {
      return (
        <LocationCard key={company.id} {...company} clicker={cardHandler} />
      );
    });
  } else {
    return (
      <h2 className="h-full w-full mx-auto grid items-center">Loading...</h2>
    );
  }
  return (
    <div className="w-[70%] flex flex-col gap-8 overflow-y-scroll justify-between">
      <div className="px-10 pt-10 flex flex-col gap-8 max-h-[50vh]">
        <div className="text-5xl font-pop">Hey, {`${user.get("username").substring(0, 7)}...`}</div>
        <div className="flex gap-4 max-w-full flex-wrap overflow-y-scroll pb-10">
          {cards}
        </div>
      </div>
      <div className="w-full h-[50vh]">
        <Map data={data} />
      </div>
    </div>
  );
};

export default Dashboard;

// getprops
