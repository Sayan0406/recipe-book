import React from 'react';
import './Recipe.css';

const Recipe = ({ recipe, index, removeRecipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ol>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ol>
      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <button onClick={() => removeRecipe(index)}>Remove Recipe</button>
    </div>
  );
};

export default Recipe;
