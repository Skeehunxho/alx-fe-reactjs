// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';  // Import RecipeDetails component
import DeleteRecipeButton from './components/DeleteRecipeButton';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <DeleteRecipeButton />
        
        {/* Define the routes */}
        <Routes>
          {/* Main route for the recipe list */}
          <Route path="/" element={<RecipeList />} />
          {/* Route to display individual recipe details */}
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
