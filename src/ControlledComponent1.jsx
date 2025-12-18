import React, { useState } from 'react'

const ControlledComponent1 = () => {

    const [myData, setmyData] = useState({
        fname: "",
        lname: "",
        review: "",
        subject: "react"
    });

    const changeData = (e) => {
        const { name, value } = e.target;
        setmyData({
            ...myData,
            [name]: value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        alert(`${myData.fname} ${myData.lname} - ${myData.subject}`);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                First Name:
                <input
                    type='text'
                    value={myData.fname}
                    onChange={changeData}
                    name="fname"
                /><br />

                Last Name:
                <input
                    type='text'
                    value={myData.lname}
                    onChange={changeData}
                    name="lname"
                /><br />

                Review:
                <textarea
                    value={myData.review}
                    onChange={changeData}
                    name="review"
                ></textarea><br />

                Subject:
                <select
                    name="subject"
                    value={myData.subject}
                    onChange={changeData}
                >
                    <option value="react">React</option>
                    <option value="javascript">JavaScript</option>
                    <option value="node">Node.js</option>
                    <option value="express">Express</option>
                </select><br /><br />

                <button>Submit Form</button>
            </form>

            <h2>First name: {myData.fname}</h2>
            <h2>Last name: {myData.lname}</h2>
            <h2>Review: {myData.review}</h2>
            <h2>Subject: {myData.subject}</h2>
        </div>
    );
};

export default ControlledComponent1;
