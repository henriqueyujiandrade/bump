import axios from "axios";

const api = axios.create({
    baseURL: "https://bump-capstone.herokuapp.com/",
});

export default api;
