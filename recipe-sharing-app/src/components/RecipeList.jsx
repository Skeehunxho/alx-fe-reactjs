// src/components/RecipeList.jsx

import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';  // Import Link

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);  // Get filtered recipes

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              {/* Link to the detailed recipe page */}
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>  
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
