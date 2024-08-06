// axiosConfig.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:7500`,
  headers: {
    "Content-Type": "application/json",
  },
});
