import React, { useState } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";

const FriendsForm = props => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            age: Number(friend.age)
        });
        axiosWithAuth()
            .post("/friends", localStorage.getItem("token"), friend)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log("Error adding friend: ", err));
        setFriend({
            name: "",
            age: "",
            email: ""
        });
    }

    return (
        <div className="friends-form">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Name:</label>
                    <input
                        name="name"
                        value={friend.name}
                        onChange={handleChanges}
                    />
                </div>
                <div className="input">
                    <label>Age:</label>
                    <input
                        name="age"
                        value={friend.age}
                        onChange={handleChanges}
                    />
                </div>
                <div className="input">
                    <label>Name:</label>
                    <input
                        name="email"
                        value={friend.email}
                        onChange={handleChanges}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FriendsForm;