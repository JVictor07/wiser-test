import axios from 'axios';

const wiserAPI = axios.create({
  baseURL: 'https://602fec45a1e9d20017af1460.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default wiserAPI;
