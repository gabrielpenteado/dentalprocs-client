import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dentalprocs-server.cyclic.app'
});