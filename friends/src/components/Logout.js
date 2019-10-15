import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout = props => {
    useEffect(() => {
        localStorage.removeItem("token");
        console.log("In logout");
        props.history.push("/login");
    }, []);

    return (
        <>
            <h3>Logging out</h3>
            <Redirect to="/login" />
        </>
    );
}

export default Logout;