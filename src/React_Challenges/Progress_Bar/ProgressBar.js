import React from 'react'

const ProgressBar = ({ width=2 }) => {
    return (
        <>
            <div className='bar'>
                <div className="range pb-1 " style={{ width: `${width}%` }}>
                    {width}%
                </div>
            </div>
        </>
    )
}

export default ProgressBar