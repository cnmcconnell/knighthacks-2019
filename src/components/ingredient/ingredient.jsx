import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './ingredient.style';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      expanded: false,
      details: null,
    };

    this.handleExpand = this.handleExpand.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const { add, name, searchId } = this.props;
    const { details } = this.state;

    if (!details) {
      fetch(`/api?type=details&query=${encodeURIComponent(searchId)}`)
        .then(r => r.json())
        .then((r) => {
          r.price = (Math.random() * 4 + 1).toFixed(2);
          this.setState({ details: r });

          add({
            name,
            searchId,
            nutrition: r,
          });
        });
    } else {
      add({
        name,
        searchId,
        nutrition: details,
      });
    }
  }

  handleExpand() {
    const { searchId } = this.props;
    const { details } = this.state;

    if (!details) {
      fetch(`/api?type=details&query=${encodeURIComponent(searchId)}`)
      .then(r => r.json())
      .then((r) => {
        r.price = `$${(Math.random() * 4 + 1).toFixed(2)}`;
        this.setState({ details: r });
      });
    }

    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { classes, name } = this.props;
    const { expanded, details } = this.state;

    const elmDetails = (expanded && details)
      ? (
        <div className={classes.bottom}>
          {Object.keys(details).map(detail => (
            <div key={detail} className={classes.detail}>{`${detail} - ${details[detail]}`}</div>
          ))}
        </div>
      )
      : null;

    return (
      <div className={classes.ingredient}>
        <div className={classes.top}>
          <div className={classes.name}>{name}</div>
          <div className={classes.button} onClick={this.handleExpand}>{expanded ? '^' : 'v'}</div>
          <div className={classes.button} onClick={this.handleAdd}>+</div>
        </div>
        {elmDetails}
      </div>
    );
  }
}

Ingredient.propTypes = {
  add: PropTypes.func.isRequired,
  searchId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Ingredient);
