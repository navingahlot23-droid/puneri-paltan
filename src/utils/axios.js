import axios from "axios";

const api = axios.create({
    baseURL: "https://appy.trycatchtech.com/v3/puneri_paltan/"
});

export default api;