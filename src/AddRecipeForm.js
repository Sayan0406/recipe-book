import React, { useState } from 'react';
import './AddRecipeForm.css';

const AddRecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      steps: steps.split('.').map(step => step.trim())
    };
    addRecipe(newRecipe);
    setName('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <textarea
        placeholder="Steps (period separated)"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
