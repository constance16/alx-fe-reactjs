import React, { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="App text-center p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <Search setUserData={setUserData} setLoading={setLoading} setError={setError} />
      
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && !loading && !error && <UserCard user={userData} />}
    </div>
  );
}

export default App;