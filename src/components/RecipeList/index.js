import React from "react";

import { RecipeListWrapper } from "./styles";
import RecipeCard from "../RecipeCard";

export default function RecipeList({ recipes, deleteRecipe }) {
  const listOfRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      prepTime={recipe.prepTime}
      serves={recipe.serves}
      deleteRecipe={deleteRecipe}
    />
  ));

  return <RecipeListWrapper>{listOfRecipes}</RecipeListWrapper>;
}
