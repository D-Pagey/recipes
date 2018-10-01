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
    },
    isEditMode: false
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

  handleOnChange = e => {
    const { addRecipe } = this.state;

    const updatedAddRecipe = {
      ...addRecipe,
      [e.target.name]: e.target.value
    };
    this.setState({ addRecipe: updatedAddRecipe });
  };

  toggleEditMode = () => {
    this.setState(prevState => ({
      isEditMode: !prevState.isEditMode
    }));
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
    const { recipes, addRecipe, isEditMode } = this.state;

    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        <RecipeList
          recipes={recipes}
          deleteRecipe={this.deleteRecipe}
          toggleEditMode={this.toggleEditMode}
          isEditMode={isEditMode}
        />
        <AddRecipe
          inputValues={addRecipe}
          submit={this.handleSubmit}
          onChange={this.handleOnChange}
        />
      </AppWrapper>
    );
  }
}
