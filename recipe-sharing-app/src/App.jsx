import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useRecipeStore} from './components/recipeStore'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <h1>Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
       <useRecipeStore />
        <FavoritesList />
        <RecommendationsList />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
<RecipeList />
<AddRecipeForm />
<RecipeList />
    </Router>
  );
}

export default App