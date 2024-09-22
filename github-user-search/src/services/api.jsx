import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Optional: Use environment variable for API key (if needed for higher rate limits)
// const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

// Search GitHub users by username
export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query
      },
      // headers: {
      //   Authorization: `token ${GITHUB_API_KEY}`
      // }
    });
    return response.data.items;  // GitHub API returns 'items' array of users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;  // Throw error to be handled in the UI
  }
};

// Fetch specific user details (optional)
export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;  // Return full user data
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
