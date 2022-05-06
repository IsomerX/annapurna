import React from "react";

const Hero = () => {
    return (
        <div className="h-[70vh] sm:h-[60vh] grid place-items-center mx-auto text-center w-full px-8">
            <div className="flex flex-col items-center gap-8 md:w-3/4">
                <div className="text-4xl sm:text-7xl font-bold font-pop">
                    Changing India Together
                </div>
                <div className="text-base sm:text-lg font-light font-sora">
                    In September 2015, world leaders at the United Nations
                    General Assembly pledged to drastically transform the world
                    by 2030. The Sustainable Development Goals, known as the
                    Global Goals, is a plan to eliminate hunger, fight
                    inequality, and clean up the planet. Samsung is partnering
                    with this movement, and we want you to join us in making a
                    difference.
                </div>
                <button className="border-2 border-black w-fit py-2 px-8 hover:bg-black hover:text-white transition-all">
                    Contribute Today
                </button>
            </div>
        </div>
    );
};

export default Hero;
