import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      
      {/* Add a button to navigate to the Add Recipe Form */}
      <div className="flex justify-end mb-4">
        <Link
          to="/add-recipe"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Example: List of recipes with links to their detail pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through recipes and link to detail page */}
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
