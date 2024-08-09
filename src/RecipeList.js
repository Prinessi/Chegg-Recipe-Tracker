import React from "react";
import RecipeCompiler from "./RecipeCompiler";
import RecipeCreate from "./RecipeCreate";

function RecipeList({ RecipeData, deleteRecipeHandler, createRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RecipeData.map((recipe, index) => (
            <RecipeCompiler
              deleteRecipeHandler={() => deleteRecipeHandler(index)}
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
