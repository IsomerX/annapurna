import React, { useRef } from "react";
import DashboardSideBar from "../../components/DashboardSideBar";

const Host = () => {
  const name = useRef();
  const slots = useRef();
  const lat = useRef();
  const lng = useRef();
  const from = useRef();
  const to = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      name.current.value,
      slots.current.value,
      lat.current.value,
      lng.current.value,
      from.current.value,
      to.current.value
    );

    fetch("/api/create-company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        slots: +slots.current.value,
        lat: +lat.current.value,
        lng: +lng.current.value,
        timing: `${from.current.value} - ${to.current.value}`,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Hosting created successfully");
          name.current.value = "";
          slots.current.value = "";
          lat.current.value = "";
          lng.current.value = "";
          from.current.value = "";
          to.current.value = "";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full flex h-[100vh]">
      <DashboardSideBar isActive={3} />
      <div className="w-[70%] flex flex-col gap-8 overflow-y-scroll justify-between">
        <div className="px-10 pt-10 flex flex-col gap-8">
          <div className="text-5xl font-pop">Hey, {"Ayush Karir"}</div>
          <div className="h-[2px] bg-slate-200"></div>
          <form className="font-sora flex flex-col gap-4 w-1/2">
            <h1 className="text-3xl font-medium font-pop">
              Help People Live Better
            </h1>
            <label className="font-medium">Name of Organisation</label>
            <input
              className="border-2 border-gray-200 rounded-lg p-2"
              ref={name}
            />
            <label className="font-medium">Number of Slots Available</label>
            <input
              type="number"
              className="border-2 border-gray-200 rounded-lg p-2"
              ref={slots}
            />
            <label className="font-medium">Location</label>
            <div className="flex items-center gap-2">
              <span>Latitude : </span>
              <input
                className="border-2 border-gray-200 rounded-lg p-2"
                ref={lat}
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Longitude : </span>
              <input
                className="border-2 border-gray-200 rounded-lg p-2"
                ref={lng}
              />
            </div>
            <label className="font-medium">Timing</label>
            <div>from</div>
            <input
              type="time"
              className="border-2 border-gray-200 rounded-lg p-2"
              ref={from}
            />
            <div>to</div>
            <input
              type="time"
              className="border-2 border-gray-200 rounded-lg p-2"
              ref={to}
            />
            <button
              className="bg-green-400 transition-all text-white rounded-lg p-3 mt-3 hover:bg-green-500"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Host;
