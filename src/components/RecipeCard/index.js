import React from "react";

import { RecipeCardWrapper, RecipeTitle } from "./styles";

export default function RecipeCard({
  id,
  deleteRecipe,
  name,
  serves,
  prepTime,
  toggleEditMode,
  isEditMode
}) {
  const editing = isEditMode ? (
    <i className="material-icons">done</i>
  ) : (
    <i className="material-icons">edit</i>
  );

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
      <button type="button" onClick={toggleEditMode}>
        {editing}
      </button>
    </RecipeCardWrapper>
  );
}
