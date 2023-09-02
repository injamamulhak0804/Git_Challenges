import React, { useEffect, useState } from 'react'
import './Window_size.css'

const Window_size = () => {

    const [width, setWidth] = useState('')
    const [Height, setHeight] = useState('')

    const size = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', size)
        size()
    }, [])

    return (
        <>
            <div className="wrapper">
                <h2>Window Width: {width} px</h2>
                <h2>Window Height: {Height} px</h2>
            </div>
        </>
    )
}

export default Window_size