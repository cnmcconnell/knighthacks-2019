import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './container.style';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.container}>
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Container);
