import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import LocationCard from "../locationCard";
import Map from "./map";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [showUrl, setShowUrl] = useState(false);
  const [refetch, setRefetch] = useState(0);

  const { user } = useMoralis();

  useEffect(() => {
    fetch("/api/getCompanies")
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  const cardHandler = async (uid, name, timing, lat, lng) => {
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
      }),
    });

    try {
      const added = await client.add(
        `user: ${user.get(
          "username"
        )}; name: ${name}; timing: ${timing}; lat: ${lat}, lng: ${lng} uid: ${uid}`
      );
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setUrl(url);
      setShowUrl(true);

      let temp = data;

      temp.forEach((e, idx) => {
        if (e.uid === uid) {
          temp[idx].slots--;
          return;
        }
      });
      temp = temp.filter((e) => e.slots > 0);
      setData(temp);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  let cards;

  if (data.length > 0) {
    cards = data
      .filter((e) => e.slots > 0)
      .map((company) => {
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
        <div className="text-5xl font-pop">
          Hey, {`${user.get("username").substring(0, 7)}...`}
        </div>
        <div className="flex gap-4 max-w-full flex-wrap overflow-y-scroll pb-10">
          {cards}
        </div>
      </div>
      <div className="w-full h-[50vh]">
        <Map data={data} />
      </div>
      {url && showUrl && (
        <div
          className="fixed h-[100vh] w-full bg-[#000000a4] top-0 left-0 z-10"
          onClick={() => setShowUrl(false)}
        >
          <div className="absolute p-10 bg-black text-white rounded-lg z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-sora">
            <h1>Ticket URL :</h1> {"  "}
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

// getprops
