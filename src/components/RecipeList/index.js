import React from 'react';
import styled from 'styled-components';

import RecipeCard from '../RecipeCard';
import data from '../../RawData';

const RecipeListWrapper = styled.div`
  padding: 0 10px;
`;

export default function RecipeList() {
  const recipes = Object.keys(data).map(element => (
    <RecipeCard key={element} recipe={data[element]} />));

  return (
    <RecipeListWrapper>
      {recipes}
    </RecipeListWrapper>
  );
}
