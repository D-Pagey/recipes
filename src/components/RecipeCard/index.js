import React from 'react';
import {
  shape,
  string,
  number,
  func,
} from 'prop-types';

import { RecipeCardWrapper, RecipeTitle } from './styles';

export default function RecipeCard({ recipe, deleteRecipe }) {
  const { name, prepTime, serves } = recipe;

  return (
    <RecipeCardWrapper>
      <RecipeTitle>{name}</RecipeTitle>
      <p>Preparation Time = <span>{prepTime} minutes</span></p>
      <p>Serves = <span>{serves}</span></p>
      <button type="button" onClick={deleteRecipe}>
        <i className="material-icons">delete</i>
      </button>
    </RecipeCardWrapper>
  );
}

RecipeCard.propTypes = {
  recipe: shape({
    name: string,
    prepTime: number,
    serves: number,
  }).isRequired,
  deleteRecipe: func.isRequired,
};
