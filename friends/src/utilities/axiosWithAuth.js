import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: JSON.parse(localStorage.getItem("token"))
        }
    });
};

export default axiosWithAuth;