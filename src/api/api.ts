import axios from 'axios';

export const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  // @ts-ignore
  header: {
    "API-KEY": "3d4f65d8-41a1-4036-9505-e89cf1642bed"
  }
})