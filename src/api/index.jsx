import axios  from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization" : `${localStorage.getItem("token")}`
    },
    timeout: 10000,
})

export default instance