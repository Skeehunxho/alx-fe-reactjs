import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Home page showing the list of recipes */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe detail page showing full recipe details based on ID */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />

          {/* Form to add a new recipe */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
