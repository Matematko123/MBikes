import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2YwYzE3ZDE1NzkxMzFmNjRkZGIwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODg5NTI0NSwiZXhwIjoxNjQ5MTU0NDQ1fQ.30ny_0XJf8GneKrSlrHCVg28axDfDM1s5Qy0u84yScw';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  // @ts-ignore
  header: { token: `Bearer ${TOKEN}` },
});
