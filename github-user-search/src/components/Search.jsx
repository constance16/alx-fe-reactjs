import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username) onSearch(username);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-l-md"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
