import React, { useState } from 'react';
import Recipe from './Recipe';
import AddRecipeForm from './AddRecipeForm';
import './RecipeBook.css';

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);
  const [theme, setTheme] = useState('light');

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const removeRecipe = (index) => {
    const newRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(newRecipes);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`recipe-book ${theme}`}>
      <h1>Recipe Book</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <AddRecipeForm addRecipe={addRecipe} />
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          index={index}
          recipe={recipe}
          removeRecipe={removeRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeBook;
