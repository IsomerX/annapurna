import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReachOut = () => {
  return (
    <div className="w-full my-0 py-0 flex bg-black text-white">
      <div className="py-20 w-[60%] flex flex-col px-10">
        <img src="/static/images/quotecirc.svg" className="w-20 pb-14" alt="" />
        <div className="px-10">
          <h2 className="text-5xl font-bold font-pop">Reach Out</h2>
          <p className="pt-10 font-sora text-xl">
            According to FAO estimates in 'The State of Food Security and
            Nutrition in the World', 2020 report, 189.2 million people are
            undernourished in India. By this measure, 14% of the population is
            undernourished in India. We plan to change this. However, to tackle
            this problem, we need support from NGOs all over the country to help
            in distribution of food from various sources.
          </p>
          <Link passHref href="/signup">
            <div className="flex gap-2 pt-10 underline text-xl cursor-pointer items-center">
              <p className="text-xl">Become a part</p>
              <img
                src="/static/images/external link.svg"
                className="w-4"
                alt="Become a part"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[45%]">
        <img
          src="/static/images/hungry-kids.png"
          className="w-full"
          alt="kids are hungry"
        />
      </div>
    </div>
  );
};

export default ReachOut;
