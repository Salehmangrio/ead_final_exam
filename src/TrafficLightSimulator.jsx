import React, { useState, useEffect } from 'react'

const TrafficLightSimulator = () => {

    return (
        <div className='h-screen flex justify-center items-center flex-col gap-2'>
            <h1 className='text-bold'>Traffic Light Simulator</h1>
            <div className='w-[100px] h-[250px] bg-gray-700 rounded flex flex-col justify-center items-center gap-4'>
                <div className='w-[50px] h-[50px] rounded-full bg-red-600 shadow-[0_2px_3px_2px_red] shadow-red-500'></div>
                <div className='w-[50px] h-[50px] rounded-full bg-yellow-300 shadow-[0_2px_3px_2px_yellow] shadow-amber-200'></div>
                <div className='w-[50px] h-[50px] rounded-full bg-green-500 shadow-[0_2px_3px_2px_green] shadow-green-500'></div>
            </div>
        </div>
    )
}

export default TrafficLightSimulator