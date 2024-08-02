import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7500",
});

export { axiosInstance };
