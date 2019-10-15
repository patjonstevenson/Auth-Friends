import React, { useState } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";

const LoginForm = props => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
            })
            .catch(err => console.log("Error adding credentials: ", err));
    }

    return (
        <div className="credentials-form">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChanges}
                    />
                </div>
                <div className="input">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChanges}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;