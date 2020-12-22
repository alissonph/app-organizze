import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

//TODO - usar REACT_APP_API_URL

export default api;