/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tokens = (props) => {
  return (
    <div className="bg-[#000] w-full flex flex-row-reverse  gap-2 justify-between text-white">
      <div className="w-[50%] flex flex-col px-10 pr-24 mr-20 justify-center">
        <h2 className="text-5xl font-bold font-pop">How Tokens Work?</h2>
        <p className="pt-10 font-sora text-xl">
          The total number of slots available for a hall is published by
          individual halls on a daily basis. Each user has 6 Tokens in total. A
          user can choose to visit any location and this would cost 1 token, in
          exchange they get a ticket for the given slot. This way users can book
          slots.
        </p>
      </div>
      <div className="w-[40%] ml-32 pl-10 pt-16 pb-10">
        <img src="/static/images/ETH 1.png" alt="" className="w-[65%]" />
      </div>
    </div>
  );
};

export default Tokens;
