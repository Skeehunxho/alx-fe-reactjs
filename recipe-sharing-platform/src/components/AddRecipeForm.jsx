import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Ensure all fields are filled and at least 2 ingredients
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientList = ingredients.split(',').map(item => item.trim());
    if (ingredientList.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    setError('');
    
    // Submit the form data (this could be sent to an API)
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps
    };

    console.log(newRecipe);
    alert('Recipe submitted successfully!');

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        {error && (
          <div className="mb-4 text-red-500 text-sm font-semibold">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 1 cup of sugar, 2 eggs, 1/2 cup of milk"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the cooking steps"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
