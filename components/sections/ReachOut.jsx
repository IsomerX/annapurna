/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReachOut = () => {
  return (
    <div className="w-full my-0 py-0 flex bg-black text-white">
      <div className="pt-20 w-[60%] flex flex-col px-10">
        <img src="/static/images/quotecirc.svg" className="w-20 pb-14" alt="" />
        <div className="px-10">
          <h1 className="text-5xl font-bold font-pop">Reach Out</h1>
          <p className="pt-10 font-sora">
            According to FAO estimates in 'The State of Food Security and
            Nutrition in the World', 2020 report, 189.2 million people are
            undernourished in India. By this measure, 14% of the population is
            undernourished in India. We plan to change this. However, to tackle
            this problem, we need support from NGOs all over the country to help
            in distribution of food from various sources.
          </p>
        </div>
        <div className="flex items-center gap-2 pt-10 underline text-xl pl-5">
          <p>Become a part</p>
          <img
            src="/static/images/external link.svg"
            className="w-4"
            alt=""
          />
        </div>
      </div>
      <div className="w-[40%]">
        <img src="/static/images/hungry-kids.png" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default ReachOut;
