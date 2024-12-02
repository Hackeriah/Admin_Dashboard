import axios from 'axios';

// Create an Axios instance with the base URL of your backend API
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Update this to your actual API base URL in production
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle user signup
export const signup = async (firstname, lastname, email, password) => {
  try {
    const response = await axiosInstance.post('/signup/', {
      firstname,
      lastname,
      email,
      password,
    });
    console.log('Signup successful:', response.data.message);
    return response.data;
  } catch (error) {
    // More detailed error handling
    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error('Signup error:', error.response.data);
      throw new Error(error.response.data.message || 'Signup failed');
    } else if (error.request) {
      // No response was received after the request was made
      console.error('No response received:', error.request);
      throw new Error('No response from the server. Please try again later.');
    } else {
      // Some other error occurred
      console.error('Error setting up request:', error.message);
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

// Function to handle user login and save JWT tokens
export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login/', { email, password });

    // Store the JWT tokens in localStorage (adjust to secure storage for production)
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);

    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    // Error handling
    if (error.response) {
      console.error('Login error:', error.response.data);
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      console.error('Login error:', error.message);
      throw new Error('Login failed. Please try again later.');
    }
  }
};

// Function to fetch protected data using the access token
export const fetchProtectedData = async () => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    throw new Error('No access token found');
  }

  try {
    const response = await axiosInstance.get('/protected-endpoint/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Protected data:', response.data);
    return response.data;
  } catch (error) {
    // Error handling for protected data fetch
    if (error.response) {
      console.error('Error fetching protected data:', error.response.data);
      throw new Error(error.response.data.message || 'Failed to fetch data');
    } else {
      console.error('Error fetching protected data:', error.message);
      throw new Error('Error fetching protected data');
    }
  }
};
