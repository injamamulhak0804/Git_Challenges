import React, { useEffect } from 'react'
import { useState } from 'react';

const Index = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [trigger, setTrigger] = useState(0)

    function startTimer ()  {
        window.Timer = setInterval(() =>{
            setSec((sec) => sec + 1)
        }, 1000)
    };

    function stopTimer  () {
        clearInterval(window.Timer)   
    };

    const resetTimer = () => {
        setSec(0)
    };


    return (
        <div className="container">
            <h1>Timer</h1>
            <span> {Math.trunc(sec/ 60)} mins </span>
            <span> {sec} secs</span>
            <div>
                <button className='btn btn-primary ms-2' onClick={startTimer}>Start</button>
                <button className='btn btn-primary ms-2' onClick={stopTimer}>Stop</button>
                <button className='btn btn-primary ms-2' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default Index