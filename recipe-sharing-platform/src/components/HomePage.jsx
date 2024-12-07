import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import recipeData from "../data.json"; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data into state on component mount
  useEffect(() => {
    setRecipes(recipeData); // In a real-world app, this would be a fetch call
  }, []);

  return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-4xl  text-blue-500 font-bold text-center mb-8">Recipe Sharing Platform</h1>
      
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />

            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-blue-800">{recipe.title}</h2>
              <p className="text-white -600 mt-2">{recipe.summary}</p>
            </div>

            <div className="px-6 py-2">
              <Link to ={`/recipe/${recipe.id}`} // Link to the recipe detail page
              className="text-blue-500 hover:underline">View Recipe</Link>
            </div>
          </div>
        ))}

         {/* Link to the Add Recipe page */}
      <div className="text-center mb-6">
        <Link to="/add-recipe"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Add New Recipe
        </Link>
      </div>
      </div>
    </div>
  );
};

export default HomePage;