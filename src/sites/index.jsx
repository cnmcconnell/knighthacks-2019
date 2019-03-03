import React, { Component, Fragment } from 'react';

import './style.css';

import { Navigation } from '../components';

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
        <Navigation />
      </Fragment>
    );
  }
}

export default Index;
