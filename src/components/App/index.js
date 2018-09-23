import React, { Component } from "react";

import db from "../../firebase";
import { AppWrapper, MainTitle } from "./styles";
import RecipeList from "../RecipeList";
import AddRecipe from "../AddRecipe";

export default class App extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = () => {
    const newRecipes = [];

    db.collection("recipes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          newRecipes.push({ ...doc.data(), id: doc.id });
        });
        this.setState({ recipes: newRecipes });
      });
  };

  handleSubmit = () => {
    db.collection("recipes")
      .doc("new recipes")
      .set({ hello: true });
  };

  deleteRecipe = () => {
    console.log("deleting recipe");
    // I need to make this dynamic
    db.collection("recipes")
      .doc("DhOsaiTaqoroLq0q29jV")
      .delete();
  };

  render() {
    const { recipes } = this.state;

    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        <RecipeList recipes={recipes} deleteRecipe={this.deleteRecipe} />
        <AddRecipe submit={this.handleSubmit} />
      </AppWrapper>
    );
  }
}
