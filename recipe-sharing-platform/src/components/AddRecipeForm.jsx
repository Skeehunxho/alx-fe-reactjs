import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate title
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    // Validate ingredients (must have at least two)
    const ingredientList = ingredients.split('\n').filter(ingredient => ingredient.trim());
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients';
    }

    // Validate instructions
    if (!instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // If form is valid, create the new recipe
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split('\n'),
      instructions,
    };

    console.log('New Recipe:', newRecipe);

    // Reset form fields
    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        {/* Error message for title */}
        {errors.title && (
          <div className="mb-2 text-red-600">
            {errors.title}
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
            className={`w-full px-4 py-2 border ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Error message for ingredients */}
        {errors.ingredients && (
          <div className="mb-2 text-red-600">
            {errors.ingredients}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients, one per line"
            rows="5"
          />
        </div>

        {/* Error message for instructions */}
        {errors.instructions && (
          <div className="mb-2 text-red-600">
            {errors.instructions}
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
            Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.instructions ? 'border-red-500' : 'border-gray-300'
            } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
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
