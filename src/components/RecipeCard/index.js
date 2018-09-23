import React from "react";
import { string, number, func } from "prop-types";

import { RecipeCardWrapper, RecipeTitle } from "./styles";

export default function RecipeCard({ deleteRecipe, name, serves, prepTime }) {
  return (
    <RecipeCardWrapper>
      <RecipeTitle>{name}</RecipeTitle>
      <p>
        Preparation Time = <span>{prepTime} minutes</span>
      </p>
      <p>
        Serves = <span>{serves}</span>
      </p>
      <button type="button" onClick={deleteRecipe}>
        <i className="material-icons">delete</i>
      </button>
    </RecipeCardWrapper>
  );
}

RecipeCard.propTypes = {
  name: string.isRequired,
  serves: number.isRequired,
  prepTime: number.isRequired,
  deleteRecipe: func.isRequired
};
