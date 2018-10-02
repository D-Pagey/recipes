import React, { Component } from "react";

import db from "../../firebase";
import { AppWrapper, MainTitle } from "./styles";
import RecipeList from "../RecipeList";
import AddRecipe from "../AddRecipe";

export default class App extends Component {
  state = {
    recipes: [],
    addRecipe: {
      name: "",
      prepTime: "",
      serves: ""
    }
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

  handleNewRecipeInput = e => {
    const { addRecipe } = this.state;

    const updatedAddRecipe = {
      ...addRecipe,
      [e.target.name]: e.target.value
    };
    this.setState({ addRecipe: updatedAddRecipe });
  };

  handleEditRecipeInput = (e, id) => {
    const { recipes } = this.state;

    const recipeIndex = recipes.findIndex(recipe => recipe.id === id);
    const editedRecipes = [...recipes];

    editedRecipes[recipeIndex] = {
      ...editedRecipes[recipeIndex],
      [e.target.name]: e.target.value
    };

    this.setState({ recipes: editedRecipes });
  };

  handleUpdatedRecipe = id => {
    const { recipes } = this.state;

    const editedRecipe = recipes.filter(recipe => recipe.id === id);

    db.collection("recipes")
      .doc(id)
      .update(editedRecipe[0])
      .then(this.fetchRecipes);
  };

  handleSubmit = () => {
    const {
      addRecipe: { name, prepTime, serves }
    } = this.state;

    db.collection("recipes")
      .add({
        name,
        serves,
        prepTime
      })
      .then(
        this.setState({
          addRecipe: {
            name: "",
            prepTime: "",
            serves: ""
          }
        })
      )
      .then(this.fetchRecipes);
  };

  deleteRecipe = id => {
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(this.fetchRecipes);
  };

  render() {
    const { recipes, addRecipe } = this.state;

    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        <RecipeList
          recipes={recipes}
          deleteRecipe={this.deleteRecipe}
          handleEditRecipeInput={this.handleEditRecipeInput}
          handleUpdatedRecipe={this.handleUpdatedRecipe}
        />
        <AddRecipe
          inputValues={addRecipe}
          submit={this.handleSubmit}
          handleNewRecipeInput={this.handleNewRecipeInput}
        />
      </AppWrapper>
    );
  }
}
