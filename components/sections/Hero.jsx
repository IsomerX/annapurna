import React from 'react'

const Hero = () => {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-8 font-pop w-3/4'>
            <div className=' text-7xl font-bold'>
                Changing India Together
            </div>
            <div className='text-lg font-light'>
                In September 2015, world leaders at the United Nations General Assembly pledged to drastically transform the world by 2030. The Sustainable Development Goals, known as the Global Goals, is a plan to eliminate hunger, fight inequality, and clean up the planet. Samsung is partnering with this movement, and we want you to join us in making a difference.
            </div>
            <button className='border-2 border-black w-fit py-2 px-8 hover:bg-black hover:text-white transition-all'>
                Contribute Today
            </button>
        </div>
    )
}

export default Hero