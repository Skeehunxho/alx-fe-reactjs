import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // Access the API key

export const searchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}` // Optional if API key is needed
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data', error);
    throw error;
  }
};
