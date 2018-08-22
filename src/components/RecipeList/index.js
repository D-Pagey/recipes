import React from 'react';
import styled from 'styled-components';

import RecipeCard from '../RecipeCard';

const RecipeListWrapper = styled.div`
  padding: 0 10px;
`;

export default function RecipeList({ recipes }) {
  const listOfRecipes = recipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe} />);

  return (
    <RecipeListWrapper>
      {listOfRecipes}
    </RecipeListWrapper>
  );
}
