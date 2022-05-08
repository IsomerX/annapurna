import React from "react";

const LocationCard = ({lat, lng, timing}) => {
  
  return (
    <div className="h-fit w-fit p-7 shadow-lg hover:shadow-xl transition-all rounded-lg flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Location</span>
        <span className="font-sora">{`${lat} & ${lng}`}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Timing</span>
        <span className="font-sora">{timing}</span>
      </div>
    </div>
  );
};

export default LocationCard;
