import React from "react";

import { RecipeListWrapper } from "./styles";
import RecipeCard from "../RecipeCard";

export default function RecipeList({
  recipes,
  deleteRecipe,
  toggleEditMode,
  isEditMode
}) {
  const listOfRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      prepTime={recipe.prepTime}
      serves={recipe.serves}
      deleteRecipe={deleteRecipe}
      toggleEditMode={toggleEditMode}
      isEditMode={isEditMode}
    />
  ));

  return <RecipeListWrapper>{listOfRecipes}</RecipeListWrapper>;
}
