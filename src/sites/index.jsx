import React, { Component, Fragment } from 'react';

import './style.css';

import { Navigation, RecipeCard } from '../components';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: 'hello',
    };
  }

  render() {
    const { login } = this.state;

    return (
      <Fragment>
        <Navigation name="first one" />
        <RecipeCard name="second one" />
        <RecipeCard name="third" />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Fragment>
    );
  }
}

export default Index;
