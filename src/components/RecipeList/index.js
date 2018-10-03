import React from "react";
import { func, shape, string } from "prop-types";

import { RecipeListWrapper } from "./styles";
import RecipeCard from "../RecipeCard";

export default function RecipeList({
  recipes,
  deleteRecipe,
  handleEditRecipeInput,
  handleUpdatedRecipe
}) {
  const listOfRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      prepTime={recipe.prepTime}
      serves={recipe.serves}
      deleteRecipe={deleteRecipe}
      handleEditRecipeInput={handleEditRecipeInput}
      handleUpdatedRecipe={handleUpdatedRecipe}
    />
  ));

  return <RecipeListWrapper>{listOfRecipes}</RecipeListWrapper>;
}

RecipeList.propTypes = {
  handleEditRecipeInput: func.isRequired,
  handleUpdatedRecipe: func.isRequired,
  deleteRecipe: func.isRequired,
  recipes: shape({
    name: string,
    id: string,
    prepTime: string,
    serves: string
  })
};

RecipeList.defaultProps = {
  recipes: {
    name: "",
    id: "",
    prepTime: "",
    serves: ""
  }
};
