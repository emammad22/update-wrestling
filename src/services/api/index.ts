import axios from "axios";

const apiEnpoint = import.meta.env.VITE_API_ENDPOINT;

const instance = axios.create({
  baseURL: apiEnpoint,
});

export { instance };
