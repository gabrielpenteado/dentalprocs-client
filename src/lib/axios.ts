import axios from "axios";

export const api = axios.create({
  //   baseURL: "https://dentalprocs-server.onrender.com",
  //   baseURL: "https://dentalprocs-server.cyclic.app",
  baseURL: "https://dentalprocs-server.vercel.app",
  //   baseURL: "http://localhost:3333",
});
