import axios from 'axios';

// API base URL
const API_URL = 'http://your-api-url.com';

// login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const Api = {
  login
};

export default Api;
