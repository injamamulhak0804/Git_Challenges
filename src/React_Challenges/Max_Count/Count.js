import React, { useState } from 'react'
import './Count.css'


const Count = () => {

    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(10)
    const [display, setDisplay] = useState(true)

    let clear = null
    window.onload = () => {
        clear = setInterval(Timer, 1000)

    }
    const handleClick = () => {
        setCount((count) => count + 1)
    }

    let Time = 10;

    const Timer = () => {
        setTimer(Time)
        --Time
        if (Time < 0) {
            clearInterval(clear)
            setDisplay(false)
        }
    }
    return (
        <>
            <div className="wrapper">
                <h1>No of Clicks Until timer expires</h1><br />
                <div className="box">
                    <div className="timer">
                        {count}
                    </div>
                    <div className="count">
                        Time left: {timer} seconds
                    </div>
                    <button
                        onClick={handleClick}
                        className={display ? 'btn btn-primary' : 'active'}>+</button>
                </div>
            </div>
        </>
    )
}

export default Count