import React from "react";

const LocationCard = () => {
  return (
    <div className="h-fit w-fit p-7 shadow-lg hover:shadow-xl transition-all rounded-lg flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Location</span>
        <span className="font-sora">{"Rajouri Garden"}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Timing</span>
        <span className="font-sora">{"10AM - 12AM"}</span>
      </div>
    </div>
  );
};

export default LocationCard;
