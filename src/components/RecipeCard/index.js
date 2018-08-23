import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RecipeCardWrapper = styled.div`
  border: 1px solid purple;
  border-radius: 6px;
  margin: 1rem 0;
  padding: 10px;
`;

const RecipeTitle = styled.h4`
  margin: 10px 0 0;
  text-align: center;
`;

export default class RecipeCard extends Component {
  deleteRecipe = () => {
    console.log('deleting recipe');
  }

  render() {
    const {
      name, prepTime, serves,
    } = this.props.recipe;

    return (
      <RecipeCardWrapper>
        <RecipeTitle>{name}</RecipeTitle>
        <p>Preparation Time = <span>{prepTime} minutes</span></p>
        <p>Serves = <span>{serves}</span></p>
        <button type="button" onClick={this.deleteRecipe}>
          <i className="material-icons">delete_forever</i>
        </button>
      </RecipeCardWrapper>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    prepTime: PropTypes.number,
    serves: PropTypes.number,
  }).isRequired,
};
