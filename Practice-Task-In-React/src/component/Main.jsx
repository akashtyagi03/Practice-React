import React from 'react'

const Main = (setTime) => {
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
    

    const Start = () => setIsActive(true)
    const handlestop = () => setIsActive(false)
    const handlerestart = () => {
        setIsActive(false);
        setTime(25*60);
    }

    function shorttime() {
        setTime(5 * 60)
    }
    function longtime() {
        setTime(5 * 60)
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="h-15 w-100">
                    <div className='flex flex-wrap justify-around p-2 '>
                        <button className='border-1 rounded-sm p-2 cursor-pointer'>Pomodoro</button>
                        <button className='border-1 rounded-sm p-2 cursor-pointer' onClick={shorttime}>Short Break</button>
                        <button className='border-1 rounded-sm p-2 cursor-pointer' onClick={longtime}>Long Break</button>
                    </div>
                </div>
            </div>
            <div>
                <div>{Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}</div>
                <button onClick={Start}>Start</button>
                <button onClick={handlestop}>Stop</button>
                <button onClick={handlerestart}>Reset</button>
            </div>
        </>
    )
}

export default Main
