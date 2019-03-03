import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './navigation.style';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.navigation}>
        {children}
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectSheet(styles)(Navigation);
