import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './recipe-card.style';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSteps: false,
    };

    this.handlePlanAdd = this.handlePlanAdd.bind(this);
    this.handleShowSteps = this.handleShowSteps.bind(this);
  }

  handleShowSteps() {
    this.setState(prevState => ({
      showSteps: !prevState.showSteps,
    }));
  }

  handlePlanAdd() {
    const { handlePlanAdd, name } = this.props;

    handlePlanAdd(name);
  }

  render() {
    const {
      classes,
      name,
      ingredients,
      steps,
    } = this.props;

    const { showSteps } = this.state;

    const totalNut = {
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    };

    let totalPrice = 0.00;

    ingredients.forEach((item) => {
      totalNut.calories += parseFloat(item.nutrition.calories);
      totalNut.fat += parseFloat(item.nutrition.fat);
      totalNut.carbs += parseFloat(item.nutrition.carbs);
      totalNut.protein += parseFloat(item.nutrition.protein);
      totalPrice += parseFloat(item.nutrition.price);
    });

    console.log( steps );

    const elmSteps = (showSteps)
      ? (
        <div className={classes.steps}>
          {steps.map((step, i) => (
            <div key={step + i} className={classes.step}>
              {step}
            </div>
          ))}
        </div>
      ) : null;

    return (
      <div className={classes.recipeCard}>
        <div className={classes.top}>
          <div className={classes.items} onClick={this.handleShowSteps}>
            <img className={classes.image} alt="recipe" src="images/recipe.jpg" />
          </div>

          <div className={classes.description}>
            <div className={classes.row}>
              <h3>{name}</h3>
              <div className={classes.price}>{`$${totalPrice.toFixed(2)}`}</div>
              <img className={classes.heart} alt="recipe" src="images/add.svg" onClick={this.handlePlanAdd} />
            </div>
            <div className={classes.nutContainer}>
              <div className={classes.calories}>
                <div>Cal</div>
                <div>{totalNut.calories.toFixed(2)}</div>
              </div>
              <div className={classes.fat}>
                <div>Fat</div>
                <div>{totalNut.fat.toFixed(2)}</div>
              </div>
              <div className={classes.carbs}>
                <div>Carbs</div>
                <div>{totalNut.carbs.toFixed(2)}</div>
              </div>
              <div className={classes.protein}>
                <div>Prot</div>
                <div>{totalNut.protein.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
        {elmSteps}
      </div>
    );
  }
}

export default injectSheet(styles)(RecipeCard);
