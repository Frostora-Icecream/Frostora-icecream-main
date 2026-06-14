import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

// Flavor API
export const flavorAPI = {
  getAll: () => api.get('/flavors/'),
  getFeatured: () => api.get('/flavors/featured/'),
  getSignature: () => api.get('/flavors/signature/'),
  getById: (id) => api.get(`/flavors/${id}/`),
}

// Team API
export const teamAPI = {
  getAll: () => api.get('/team/'),
  getById: (id) => api.get(`/team/${id}/`),
}

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact/', data),
}

// Careers API
export const careersAPI = {
  getAll: () => api.get('/careers/'),
  getById: (id) => api.get(`/careers/${id}/`),
}

// Events API
export const eventsAPI = {
  getAll: () => api.get('/events/'),
  getById: (id) => api.get(`/events/${id}/`),
}

export default api
