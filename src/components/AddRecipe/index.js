import React from "react";
import { func } from "prop-types";

import AddRecipeWrapper from "./styles";

export default function AddRecipe({ submit, inputValues, onChange }) {
  const { name, prepTime, serves } = inputValues;

  return (
    <AddRecipeWrapper>
      <label htmlFor="recipe-name">
        Name
        <input
          type="text"
          id="recipe-name"
          placeholder="Name of the recipe"
          value={name}
          onChange={e => onChange(e)}
          name="name"
        />
      </label>

      <label htmlFor="recipe-preptime">
        PrepTime
        <input
          type="number"
          id="recipe-preptime"
          placeholder="Time to prep (mins)"
          value={prepTime}
          onChange={e => onChange(e)}
          name="prepTime"
        />
      </label>

      <label htmlFor="recipe-serves">
        Serves
        <input
          type="number"
          id="recipe-serves"
          placeholder="How many people?"
          value={serves}
          onChange={e => onChange(e)}
          name="serves"
        />
      </label>

      <button type="button" onClick={submit}>
        Submit
      </button>
    </AddRecipeWrapper>
  );
}

AddRecipe.propTypes = {
  submit: func.isRequired,
  onChange: func.isRequired
};
