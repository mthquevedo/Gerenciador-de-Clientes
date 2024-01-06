import axios from "axios";

const userData = localStorage.getItem("key");

const api = axios.create({
    baseURL: "https://api2.ploomes.com",
    headers: { 'User-Key': userData },
});

export default api;
