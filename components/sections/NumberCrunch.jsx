import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const NumberCrunch = () => {
    return (
        <div className="flex flex-col w-full my-0 py-0 flex bg-black">
            <div className="pt-20 w-[100%] flex flex-col px-10">
                <div className="px-10">
                    <h1 className="text-4xl font-bold font-pop text-white">The Number Crunch</h1>
                </div>
            </div>
            <br></br>
            <div className="grid grid-flow-col w-full pt-20 mb-20">
                <div className=" border-r border-[#9B9B9B]">
                    <h1 className="text-8xl font-bold font-pop text-[#FF5F26] text-center">189.2M</h1>
                    <p className="pt-10 font-sora text-white text-center pl-10 pr-10 text-xl">According to FAO estimates in 'The State of Food Security and
                        Nutrition in the World', 2020 report, 189.2 million people are
                        undernourished in India. By this measure, 14% of the population is
                        undernourished in India.</p>
                </div>
                <div className=" border-r border-[#9B9B9B]">
                    <h1 className="text-8xl font-bold font-pop text-[#FF5F26] text-center">3000</h1>
                    <p className="pt-10 font-sora text-white text-center pl-10 pr-10 text-xl">Children die every day from hunger. Those that survive have a high chance of living with hardships in the future.
                        We at Annapurna helps decrease this number
                        through aid in the form of food.</p>
                </div>
                <div className=" border-r border-[#9B9B9B]">
                    <h1 className="text-8xl font-bold font-pop text-[#FF5F26] text-center">60%</h1>
                    <p className="pt-10 font-sora text-white text-center pl-10 pr-10 text-xl">Women account for 60 percent of India’s hungry population.
                        We at Annapurna helps decrease this number
                        through aid in the form of food.
                    </p>
                </div>
            </div>

        </div>

    );

};
export default NumberCrunch; 