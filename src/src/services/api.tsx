import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.2:3000/',
  timeout: 5000,
});

//TODO - usar REACT_APP_API_URL

export default api;