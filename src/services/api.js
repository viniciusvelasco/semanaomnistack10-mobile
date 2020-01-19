import axios from "axios";

const api = axios.create({
  baseURL: "https://mestre-week10-backend.herokuapp.com"
});

export default api;
