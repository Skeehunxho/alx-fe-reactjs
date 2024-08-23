import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

function App() {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <DeleteRecipeButton />
    </div>
  );
}

export default App;
