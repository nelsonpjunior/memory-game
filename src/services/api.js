import axios from 'axios';
import { totalCards } from '../utils/constants';

export const clientID = '9iNUTAc4FCsRj5Co6vJgzVySHxuJtL3Y';

function axiosClient() {
  return axios.create({
    baseURL: 'https://api.eyeem.com/v2/',
    timeout: 5000,
  });
}

export const photosUrl = `photos/popular?client_id=${clientID}&limit=${totalCards}`;
export const api = axiosClient();
