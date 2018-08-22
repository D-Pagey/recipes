import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RecipeCardWrapper = styled.div`
  border: 1px solid purple;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 10px;
`;

const RecipeTitle = styled.h4`
  margin: 10px 0 0;
  text-align: center;
`;

export default function RecipeCard({ recipe }) {
  const {
    name, prepTime, serves,
  } = recipe;

  return (
    <RecipeCardWrapper>
      <RecipeTitle>{name}</RecipeTitle>
      <p>Preparation Time = <span>{prepTime} minutes</span></p>
      <p>Serves = <span>{serves}</span></p>
    </RecipeCardWrapper>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    cookingTime: PropTypes.number,
    preparationTime: PropTypes.number,
    serves: PropTypes.number,
  }).isRequired,
};
