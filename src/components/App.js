import React from 'react';
import styled from 'styled-components';

import RecipeList from './RecipeList';

const MainTitle = styled.h1`
  margin: 1rem 0 0;
  text-align: center;
`;

export default function App() {
  return (
    <div>
      <MainTitle>Recipes</MainTitle>
      <RecipeList />
    </div>
  );
}
