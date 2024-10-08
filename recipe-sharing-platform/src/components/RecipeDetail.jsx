import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        {/* Link to go back to the home page */}
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Back to Home
        </Link>

        {/* Link to navigate to the Add Recipe form */}
        <Link to="/add-recipe" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add New Recipe
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-lg mb-8 shadow-lg"
      />
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ingredients</h2>
        <ul className="list-disc pl-6 mb-8">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg text-gray-700 mb-2">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Instructions</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
