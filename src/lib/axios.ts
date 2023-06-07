import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://dentalprocs-server.onrender.com'
  baseURL: 'http://localhost:3333'
});