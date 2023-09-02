import React from 'react'

const Display = ({ list, handleDelete }) => {
    return (
        <>
            <ul className='mt-4'>
                {
                    list.map((item, index) => {
                        return (
                            
                                <div className='mb-4' key={index}>
                                    <li >{item.value}
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className='btn btn-primary ms-3'>
                                            Delete
                                        </button>
                                    </li>
                                </div>
                            
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Display