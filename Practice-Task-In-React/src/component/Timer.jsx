import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        let interval = null;
        if (isActive && time>0){
            interval = setInterval(()=>{
                setTime(prev => prev - 1)
            }, 1000)
        }else if (!isActive && time !== 0){
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
        }, [isActive, time])
    }

    const Start = () => setIsActive(true)
    const handlestop = () => setIsActive(false)
    const handlerestart = () => {
        setIsActive(false);
        setTime(25*60);
    }
    
  return (
    <div>
      <div>{Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}</div>
      <button onClick={Start}>Start</button>
      <button onClick={handlestop}>Stop</button>
      <button onClick={handlerestart}>Reset</button>
    </div>
  )


export default Timer
