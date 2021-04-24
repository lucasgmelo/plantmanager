import axios from 'axios';

const api = axios.create({
    baseURL: 'https://192.168.5.80:4444',
});

export default api;