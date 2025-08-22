import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2288",
    withCredentials: true, 
})

export default api ;