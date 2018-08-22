import React, { Component } from 'react';
import styled from 'styled-components';

import firestore from '../firebase';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 320px;
`;

const MainTitle = styled.h1`
  margin: 1rem 0 0;
  text-align: center;
`;

export default class App extends Component {
  state = {
    recipes: [],
  }

  componentDidMount() {
    const newData = [];

    firestore.collection('recipes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      this.setState({ recipes: newData });
    });
  }

  render() {
    const { recipes } = this.state;

    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        <RecipeList recipes={recipes} />
        <AddRecipe />
      </AppWrapper>
    );
  }
}
