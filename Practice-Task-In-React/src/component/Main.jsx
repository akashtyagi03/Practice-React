import React from 'react'
import Timer from './Timer'

const Main = () => {
    return (
        <div className="flex justify-center h-screen">
            <div className="border-2 w-[30rem] h-[50rem]">
                <div className='flex flex-wrap justify-around p-3'>
                    <button className='border-1 rounded-sm p-1'>Pomodoro</button>
                    <button className='border-1 rounded-sm p-1'>Short Break</button>
                    <button className='border-1 rounded-sm p-1'>Long Break</button>
                </div>
                {/* <Timer/> */}
            </div>
        </div>
    )
}

export default Main
