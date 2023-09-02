import React, { useState } from 'react'
import DataBase from './DataBase'
import './Form.css'

const Form = () => {

    const initialState = {
        userName: "",
        fullName: "",
        age: ""
    };
    const [form, setValues] = useState(initialState);

    const [display, setDisplay] = useState(false);

    const printValues = (e) => {
        e.preventDefault();
        setDisplay(true);
    };

    const updateField = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log([e.target.name], ' : ', e.target.value);
    };

    return (
        <form onSubmit={printValues}>
            <div className="form w-50 mt-5 mx-auto bg-secondary p-5 rounded mb-5">
                <div>
                    <label htmlFor="userName">
                        Username: &nbsp;
                        <input
                            value={form.userName || ""}
                            name="userName"
                            onChange={updateField}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label htmlFor="fullName">
                        FullName: &nbsp;
                        <input
                            value={form.fullName || ""}
                            name="fullName"
                            type="text"
                            onChange={updateField}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label htmlFor="age">
                        Age: &nbsp;
                        <input value={form.age || ""} name="age" onChange={updateField} />
                    </label>
                </div>
                <br />
                <button className='btn btn-primary'>Submit</button>
            </div>
            {display && (
                <>
                    <div className="mx-auto w-50 bg-primary text-white p-5 rounded fw-bold">
                        <h4>Request Sent to DB with below request data</h4>
                        <ul>
                            <li>UserName: {form.userName.toUpperCase()}</li>
                            <li>FullName: {form.fullName.toUpperCase()}</li>
                            <li>Age: {form.age}</li>
                        </ul>
                    </div>
                </>
            )}
        </form>
    );
}



export default Form