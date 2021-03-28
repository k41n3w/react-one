import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rails-base-updated.herokuapp.com/'
});

export default api;