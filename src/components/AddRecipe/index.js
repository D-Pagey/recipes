import React from "react";
import { func } from "prop-types";

import { AddRecipeWrapper } from "./styles";

export default function AddRecipe({ submit }) {
  return (
    <AddRecipeWrapper>
      <label htmlFor="recipe-name">
        Name
        <input type="text" id="recipe-name" />
      </label>

      <label htmlFor="recipe-preptime">
        PrepTime
        <input type="text" id="recipe-preptime" />
      </label>

      <label htmlFor="recipe-serves">
        Serves
        <input type="text" id="recipe-serves" />
      </label>

      <button type="button" onClick={submit}>
        Submit
      </button>
    </AddRecipeWrapper>
  );
}

AddRecipe.propTypes = {
  submit: func.isRequired
};
