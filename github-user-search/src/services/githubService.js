export const fetchUserData = async (username) => {
    const baseURL = `https://api.github.com/users/${username}`;
    try {
      const response = await axios.get(baseURL);
      return response.data; // Successful response
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("User not found");
      }
      throw new Error("Something went wrong. Please try again.");
    }
  };
  