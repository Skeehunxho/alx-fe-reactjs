import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: Ensure all fields are filled
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    // Reset error message
    setError('');

    // Handle form submission logic
    const newRecipe = {
      id: Date.now(), // Unique ID (you may replace this with something more robust)
      title,
      ingredients: ingredients.split('\n'), // Splitting ingredients by newline
      instructions,
    };

    console.log('New Recipe:', newRecipe);

    // You can implement logic to save this data to state or backend here

    // Clear form after submission
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        {error && (
          <div className="mb-4 p-3 text-red-700 bg-red-200 rounded">
            {error}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, one per line"
            rows="5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps"
            rows="7"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
