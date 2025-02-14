import axios from "axios";

const api = axios.create({
  baseURL: "https://shopeeria-app.vercel.app",
});

export default api;