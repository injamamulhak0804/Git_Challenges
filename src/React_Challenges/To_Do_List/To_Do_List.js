import React, { useState } from 'react'
import Display from './Display'

const To_Do_List = () => {

    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    const handleClick = () => {
        if (value) {
            const val = { id: new Date().getMilliseconds(), value }
            const newList = [...list, val]
            setList(newList)
            setValue('');
        }
    }

    const handleDelete = (id) =>{
        const newList = list.filter((item)=>{
            return item.id !== id
        })
        setList(newList);
    }

    return (
        <>
            <div className='mt-5 ms-5'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"
                        className='ps-2 fs-5'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={handleClick}
                        className='btn btn-primary ms-2'>Add</button>
                </form>
                <Display
                    handleDelete= {handleDelete}
                list = {list}
                />
            </div>
        </>
    )
}

export default To_Do_List