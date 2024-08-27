import axios from 'axios';

const BASE_URL = 'https://jobs-production-b0b9.up.railway.app';

const api = axios.create({
  baseURL: BASE_URL,
});

// API functions
export const getJob = (id) => api.get(`/jobs/${id}`);
export const addJob = (job) => api.post('/jobs', job);
export const updateJob = (id, job) => api.put(`/jobs/${id}`, job);
export const deleteJob = (id) => api.delete(`/jobs/${id}`);
export const getJobs = () => api.get('/jobs');

export default api;
