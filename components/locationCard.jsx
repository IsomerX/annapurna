import React from "react";

const LocationCard = ({ uid, name, slots, lat, lng, timing, clicker }) => {
  const handleClick = () => {
    clicker(uid, name, timing, lat, lng);
  };

  return (
    <div
      className="h-fit w-fit p-7 shadow-lg hover:shadow-xl transition-all rounded-lg flex flex-col gap-3 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Name</span>
        <span className="font-sora">{name}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Location</span>
        <span className="font-sora">{`${lat}, ${lng}`}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Timing</span>
        <span className="font-sora">{timing}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium font-pop">Slots Remaining</span>
        <span className="font-sora">{slots}</span>
      </div>
    </div>
  );
};

export default LocationCard;
