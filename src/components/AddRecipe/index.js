import React from "react";
import { func, string, shape, number } from "prop-types";

import AddRecipeWrapper from "./styles";

export default function AddRecipe({
  submit,
  inputValues: { name, prepTime, serves },
  handleNewRecipeInput
}) {
  return (
    <AddRecipeWrapper>
      <label htmlFor="recipe-name">
        Name
        <input
          type="text"
          id="recipe-name"
          placeholder="Name of the recipe"
          value={name}
          onChange={e => handleNewRecipeInput(e)}
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
          onChange={e => handleNewRecipeInput(e)}
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
          onChange={e => handleNewRecipeInput(e)}
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
  handleNewRecipeInput: func.isRequired,
  inputValues: shape({
    name: string,
    serves: number,
    prepTime: number
  })
};

AddRecipe.defaultProps = {
  inputValues: {
    name: "",
    serves: 0,
    prepTime: 0
  }
};
