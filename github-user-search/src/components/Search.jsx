import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // Input state
  const [userData, setUserData] = useState(null); // Data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }
  
    setLoading(true);
    setError('');
    setUserData(null);
  
    try {
      const data = fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-l w-1/2"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {userData && (
        <div className="max-w-md mx-auto bg-gray-100 p-4 rounded shadow">
          <img
            src={userData.avatar_url}
            alt="User Avatar"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <h2 className="text-xl font-bold text-center mt-4">{userData.name || userData.login}</h2>
          <p className="text-center text-blue-500">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
  ;

export default Search;
