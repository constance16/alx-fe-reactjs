import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation after form submission

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});  // Track validation errors
  const navigate = useNavigate();  // For navigation after form submission

  // Validation function
  const validate = () => {
    const newErrors = {};  // Create an object to hold errors
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Steps are required';
    
    // Return the error object (empty if no errors)
    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // Run validation

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors in state
      return; // Stop submission if there are validation errors
    }

    // Prepare new recipe data
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'), // Split ingredients into an array
      steps: steps.split('\n'), // Split steps into an array
    };

    console.log('New Recipe Submitted:', newRecipe);

    // After submission, navigate back to the Home page or another route
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Add New Recipe</h2>

      {/* Display error messages */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-red-100 p-4 mb-4 border border-red-300 text-red-700 rounded">
          <ul>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full p-3 border rounded-lg ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-semibold mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            className={`w-full p-3 border rounded-lg ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            placeholder="Enter ingredients (one per line)"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            className={`w-full p-3 border rounded-lg ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            placeholder="Enter preparation steps (one per line)"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;