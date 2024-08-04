import axios from "axios";
const PORT = import.meta.env.PORT
const axiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export { axiosInstance };
