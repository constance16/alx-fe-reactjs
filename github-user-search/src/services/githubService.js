import axios from "axios";

export const fetchUserData = async (username) => {
  const baseURL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(baseURL);
    return response.data; // Return user data if successful
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch user data");
  }
};
