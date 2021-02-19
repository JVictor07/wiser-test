import axios from 'axios';
import LoginAPI from './LoginAPI';

const wiserAPI = axios.create({
  baseURL: 'https://602fec45a1e9d20017af1460.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const instanceLoginAPI = new LoginAPI(wiserAPI);

export { instanceLoginAPI };
