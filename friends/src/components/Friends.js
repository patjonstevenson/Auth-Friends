import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import Friend from "./Friend";

const Friends = props => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log(res);
                setFriends(res.data);
            })
            .catch(err => console.log("Error getting friends: ", err));
    }, []);

    return (
        <div className="friends">
            {friends && friends.map(friend => <Friend key={friend.id} {...friend} />)}
        </div>
    );
};

export default Friends;