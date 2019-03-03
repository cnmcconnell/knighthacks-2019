import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './recipe-card.style';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, classes, name } = this.props;

    return (
      <div className={classes.recipeCard}>

        <div className={classes.items}>
          <img className={classes.image} src="images/recipe.jpg" />
        </div>

        <div className={classes.description}>
          <div className={classes.row}>
          <h3>{name}</h3>
            <div className={classes.price}> $9.99 </div>
            <img className={classes.heart} src="images/heart.svg" />
          </div>
            <p> Vestibulum quis nisl elit. Etiam vel ante a ex gravida venenatis at vel odio. Morbi magna massa, finibus non arcu non, commodo molestie neque. </p>

        </div>
      </div>
    );
  }
}

RecipeCard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectSheet(styles)(RecipeCard);
