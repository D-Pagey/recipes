import React from 'react';
import styled from 'styled-components';

import RecipeList from './RecipeList';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 320px;
`;

const MainTitle = styled.h1`
  margin: 1rem 0 0;
  text-align: center;
`;

export default function App() {
  return (
    <AppWrapper>
      <MainTitle>Recipes</MainTitle>
      <RecipeList />
    </AppWrapper>
  );
}
