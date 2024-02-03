import axios from "axios";

const endpoint = import.meta.env.VITE_API_ENDPOINT;

const instance = axios.create({
  baseURL: endpoint,
});

export { instance };
