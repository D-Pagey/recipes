import React, { Component } from 'react';

import db from '../../firebase';
import { AppWrapper, MainTitle } from './styles';
import RecipeList from '../RecipeList';
import AddRecipe from '../AddRecipe';

export default class App extends Component {
  componentDidMount() {
    const newData = [];

    db.collection('recipes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        newData.push(doc.data());
      });
      this.setState({ recipes: newData });
    });
  }

  handleSubmit = () => {
    db.collection('recipes').doc('new recipes').set({ hello: true });
  }

  deleteRecipe = () => {
    console.log('deleting recipe');
    // I need to make this dynamic
    db.collection('recipes').doc('DhOsaiTaqoroLq0q29jV').delete();
  }

  render() {
    const recipeList = this.state
    && (<RecipeList
    // eslint-disable-next-line react/destructuring-assignment
      recipes={this.state.recipes}
      deleteRecipe={this.deleteRecipe}
    />
    );

    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        {recipeList}
        <AddRecipe submit={this.handleSubmit} />
      </AppWrapper>
    );
  }
}
