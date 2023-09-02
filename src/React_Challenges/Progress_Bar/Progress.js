import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './Progress.css'

const Progress = () => {

    const [val, setVal] = useState(10)

    const setValuer = (e) => {
        setVal(e.target.value)
    };

    return (
        <>
            <div className="App">
                <h1>Progress bar</h1>
                <ProgressBar width={val} />
                <form>
                    <label htmlFor="html">Input Percentage:</label> &nbsp; 
                    <input
                        type="number"
                        value={val}
                        onChange={(e) => setValuer(e)} />
                </form>
            </div>
        </>
    );
}

export default Progress