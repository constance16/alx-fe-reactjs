import axios from "axios";

export const fetchUserData = async (username, location, minRepos, page = 1) => {
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
  
  if (username) {
    queryParams.push(`in:login ${username}`);
  }

  if (location) {
    queryParams.push(`location:${location}`);
  }

  if (minRepos) {
    queryParams.push(`repos:>=${minRepos}`);
  }

  const queryString = queryParams.join("+");

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${queryString}&per_page=10&page=${page}`
    );
    return response.data.items; // Return an array of matched users
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
;