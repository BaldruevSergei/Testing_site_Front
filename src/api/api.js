import axios from 'axios';

// импортируем переменную из .env
const API_URL = import.meta.env.VITE_API_URL;

// создаём axios-клиент
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
