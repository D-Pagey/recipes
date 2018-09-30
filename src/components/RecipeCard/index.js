import React from "react";

import { RecipeCardWrapper, RecipeTitle } from "./styles";

export default function RecipeCard({
  id,
  deleteRecipe,
  name,
  serves,
  prepTime
}) {
  return (
    <RecipeCardWrapper>
      <RecipeTitle>{name}</RecipeTitle>
      <p>
        Preparation Time = <span>{prepTime} minutes</span>
      </p>
      <p>
        Serves = <span>{serves}</span>
      </p>
      <button type="button" onClick={() => deleteRecipe(id)}>
        <i className="material-icons">delete</i>
      </button>
    </RecipeCardWrapper>
  );
}
