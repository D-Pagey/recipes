import React, { Component } from 'react';
import styled from 'styled-components';

import firestore from '../firebase';
import RecipeList from './RecipeList';

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
    // firestore.collection('recipes').add({
    //   name: 'Chicken Satay',
    //   serves: 2,
    //   prepTime: 12,
    // })
    //   .then((docRef) => {
    //     console.log('Document written with ID: ', docRef.id);
    //   })
    //   .catch((error) => {
    //     console.error('Error adding document: ', error);
    //   });
    firestore.collection('recipes').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
      });
    });
  }

  render() {
    return (
      <AppWrapper>
        <MainTitle>Recipes</MainTitle>
        <RecipeList />
      </AppWrapper>
    );
  }
}
