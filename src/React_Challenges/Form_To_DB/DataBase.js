import React from 'react'

const DataBase = ({ name, email, age, setAge, setEmail, setName }) => {
    return (
        <>
            <div className={email && name && age ? "text-center bg-primary w-50 mx-auto mt-5 text-white rounded p-5" : ''}>
                <h2>{name}</h2>
                <h2>{email}</h2>
                <h2>{age}</h2>
            {
            }
            </div>
        </>
    )
}

export default DataBase