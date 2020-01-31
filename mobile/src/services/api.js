import axios from "axios";

const api = axios.create({
  baseURL: "http://172.21.1.239:3333"
});

export default api;
