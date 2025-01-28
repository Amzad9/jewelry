import axios from 'axios';

const headers = {
    "Content-Type": "application/json",
}
const service = axios.create({
    baseURL: 'https://nichestore.vercel.app/api/v2/',
    headers: {
        ...headers
    }
})
service.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default service