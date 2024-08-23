// src/components/RecipeDetails.jsx

import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find((r) => r.id === parseInt(recipeId))
  );
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const favorites = useRecipeStore(state => state.favorites);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const isFavorite = favorites.includes(recipe.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <button onClick={handleFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
