/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
    const [showCircle, setShowCircle] = useState(false);
    const [mousePos, setMousePos] = useState({});
    const circle = useRef(0);

    // const handleMouseMove = (ev) => {
    //     setMousePos({ left: ev.pageX, top: ev.pageY });
    //     // circle.current.style.left = mousePos.left;
    //     // circle.current.style.top = mousePos.top;
    //     console.log(circle.current.style)
    //     console.log(mousePos);
    // };

    return (
        <div className="h-[70vh] sm:h-[60vh] grid place-items-center mx-auto text-center w-full px-8" >
            <div className="flex flex-col items-center gap-8 md:w-3/4">
                <div className="text-4xl xl:text-6xl font-bold font-pop">
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
                <Link href="/signup">
                    <button
                        className="border-2 border-black w-fit py-2 px-8 hover:bg-black hover:text-white transition-all"
                        onMouseEnter={() => setShowCircle(true)}
                        onMouseLeave={() => setShowCircle(false)}
                    >
                        Contribute Today
                    </button>
                </Link>
                {/* {showCircle && (
                    <img
                        src="/static/images/hover_wheel.png"
                        alt=""
                        className="absolute animate-spin-slow h-16"
                        ref={circle}
                    />
                )} */}
            </div>
        </div>
    );
};

export default Hero;
