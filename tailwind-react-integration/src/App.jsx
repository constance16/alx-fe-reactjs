import React from "react";
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  return (
    <div>
      <UserProfile />
    </div>

  );

}

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind!</h1>
    </div>
  );
}
