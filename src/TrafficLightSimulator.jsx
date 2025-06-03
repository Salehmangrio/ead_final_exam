import React, { useState, useEffect } from 'react'

const TrafficLightSimulator = () => {
    const [currentLight, setCurrentLight] = useState("red")
    const lights = ['red', 'yellow', 'green'];

    useEffect(() => {
        const interval= setInterval(() => {
            setCurrentLight(prev => {
                const currentIndex = lights.indexOf(prev);
                const nextIndex = (currentIndex + 1) % lights.length;
                return lights[nextIndex];
            });
        }, 3000);

        return()=>clearInterval(interval);
    })

    return (
        <div className='h-screen flex justify-center items-center flex-col gap-2'>
            <h1 className='text-bold'>Traffic Light Simulator</h1>
            <div className='w-[100px] h-[250px] bg-gray-700 rounded flex flex-col justify-center items-center gap-4'>
                <div
                    className={`w-[50px] h-[50px] rounded-full 
                        ${currentLight === 'red' ? 'bg-red-600 shadow-[0_0_10px_4px_red] shadow-red-400' : 'bg-gray-500'} `}
                ></div>
                <div
                    className={`w-[50px] h-[50px] rounded-full
                       ${currentLight === 'yellow' ? 'bg-yellow-300 shadow-[0_0_10px_4px_yellow] shadow-amber-200' : 'bg-gray-500'}`}></div>
                <div
                    className={`w-[50px] h-[50px] rounded-full
                     ${currentLight === 'green' ? 'bg-green-400 shadow-[0_0_10px_4px_green] shadow-green-500' : 'bg-gray-500'}`}></div>
            </div>
        </div >
    )
}

export default TrafficLightSimulator