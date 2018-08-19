import React from 'react';
import styled from 'styled-components';

const RecipeCardWrapper = styled.div`
  border: 1px solid pink;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 10px;
`;

const RecipeTitle = styled.h4`
  margin: 10px 0 0;
  text-align: center;
`;

export default function RecipeCard() {
  return (
    <RecipeCardWrapper>
      <RecipeTitle>Prawn Stir Fry</RecipeTitle>
      <p>Preparation Time = <span>15 minutes</span></p>
      <p>Cooking Time = <span>12 minutes</span></p>
      <p>Serves = <span>2</span></p>
    </RecipeCardWrapper>
  );
}
