export const fetchUserData = async (username, location, minRepos, page = 1) => {
    const queryParams = [];
    
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
  };