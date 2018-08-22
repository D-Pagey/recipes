import React, { Component } from 'react';
import styled from 'styled-components';

import firestore from '../../firebase';

const AddRecipeWrapper = styled.form`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export default class AddRecipe extends Component {
  handleSubmit = () => {
    firestore.collection('recipes').doc('new recipes').set({ hello: true });
  }

  render() {
    return (
      <AddRecipeWrapper>
        <label htmlFor="recipe-name">
        Name
          <input type="text" id="recipe-name" />
        </label>
        <label htmlFor="recipe-preptime">
        PrepTime
          <input type="text" id="recipe-preptime" />
        </label>
        <label htmlFor="recipe-serves">
        Serves
          <input type="text" id="recipe-serves" />
        </label>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </AddRecipeWrapper>
    );
  }
}
