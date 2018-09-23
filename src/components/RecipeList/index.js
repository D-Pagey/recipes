import React from "react";
import { arrayOf, shape, number, string, func } from "prop-types";

import { RecipeListWrapper } from "./styles";
import RecipeCard from "../RecipeCard";

export default function RecipeList({ recipes, deleteRecipe }) {
  const listOfRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      name={recipe.name}
      prepTime={recipe.prepTime}
      serves={recipe.serves}
      deleteRecipe={deleteRecipe}
    />
  ));

  return <RecipeListWrapper>{listOfRecipes}</RecipeListWrapper>;
}

RecipeList.propTypes = {
  recipes: arrayOf(
    shape({
      name: string,
      prepTime: number,
      serves: number
    })
  ).isRequired,
  deleteRecipe: func.isRequired
};

// RecipeList.defaultProps = {
//   recipes: []
// };
