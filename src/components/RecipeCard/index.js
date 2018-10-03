import React, { Component } from "react";
import { func, string } from "prop-types";

import { RecipeCardWrapper, RecipeTitle } from "./styles";

export default class RecipeCard extends Component {
  state = {
    isEditMode: false
  };

  submitEditedRecipe = () => {
    const { handleUpdatedRecipe, id } = this.props;

    this.toggleEditMode();
    handleUpdatedRecipe(id);
  };

  toggleEditMode = () => {
    this.setState(prevState => ({
      isEditMode: !prevState.isEditMode
    }));
  };

  renderEditingForm = () => {
    const { prepTime, serves, id, name, handleEditRecipeInput } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Recipe title ={" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => handleEditRecipeInput(e, id)}
          />
        </label>

        <label htmlFor="prepTime">
          Preparation Time ={" "}
          <input
            type="text"
            name="prepTime"
            value={prepTime}
            onChange={e => handleEditRecipeInput(e, id)}
          />{" "}
          minutes
        </label>
        <label htmlFor="serves">
          Serves ={" "}
          <input
            type="text"
            name="serves"
            value={serves}
            onChange={e => handleEditRecipeInput(e, id)}
          />{" "}
          people
        </label>
        <button type="button" onClick={this.submitEditedRecipe}>
          <i className="material-icons">done</i>
        </button>
      </form>
    );
  };

  renderContent = () => {
    const { prepTime, serves, id, deleteRecipe, name } = this.props;

    return (
      <div>
        <RecipeTitle>{name}</RecipeTitle>
        <p>
          Preparation Time = <span>{prepTime} minutes</span>
        </p>
        <p>
          Serves = <span>{serves}</span>
        </p>
        <button type="button" onClick={() => deleteRecipe(id)}>
          <i className="material-icons">delete</i>
        </button>
        <button type="button" onClick={this.toggleEditMode}>
          <i className="material-icons">edit</i>
        </button>
      </div>
    );
  };

  render() {
    const { isEditMode } = this.state;

    return (
      <RecipeCardWrapper>
        {isEditMode ? this.renderEditingForm() : this.renderContent()}
      </RecipeCardWrapper>
    );
  }
}

RecipeCard.propTypes = {
  handleUpdatedRecipe: func.isRequired,
  handleEditRecipeInput: func.isRequired,
  deleteRecipe: func.isRequired,
  id: string,
  prepTime: string,
  serves: string,
  name: string
};

RecipeCard.defaultProps = {
  id: "",
  prepTime: 0,
  serves: 0,
  name: ""
};
