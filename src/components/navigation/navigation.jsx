import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './navigation.style';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val) {
    const { updatePage } = this.props;
    updatePage(val);
  }

  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.navigation}>
        <div className={classes.btn} onClick={this.handleClick.bind(this, 'recipes')} value="recipes">
          <img src="images/home.svg" />
        </div>
        <div className={classes.btn} onClick={this.handleClick.bind(this, 'create')} value="create">
          <img src="images/add.svg" />
        </div>
        <div className={classes.btn} onClick={this.handleClick.bind(this, 'budget')} value="budget">
          <img src="images/budget.svg" />
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Navigation);
