import React from 'react'

const Details = (props) => {
    return(
        <div className='bg-[#FFF6F3] w-full flex  gap-2 justify-between'>
            <div className='pt-28 w-[50%] flex flex-col px-10 pl-24'>
            <h2 className='text-5xl font-bold font-pop'>How We function</h2>
            <p className='pt-10 font-sora'>We at Annapurna plan to make a portal where different banquet halls, party halls, etc where a lot of food is wasted and connect them to the people who can’t even afford 2 square meals a day. We plan to minimize food wastage and connect those in need.</p>
            </div>
            <div className='w-[40%] pr-10 pt-16 pb-20'>
            <img src = "/static/images/HandsTouch.png" alt = "" className='w-[90%]'/>
            </div>
        </div>
    )
}

export default Details;

