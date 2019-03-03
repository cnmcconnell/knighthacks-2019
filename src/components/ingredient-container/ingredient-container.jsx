import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './ingredient-container.style';

class IngredientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit() {
    const { submit } = this.props;
    const { name } = this.state;

    submit(name);

    this.setState({ name: '' });
  }

  render() {
    const { children, classes, current, stepTool } = this.props;
    const { name } = this.state;

    const elmCurrent = current.map((item, i) => (
      <div key={item.name + i} className={classes.item}>
        {item.name}
      </div>
    ));

    const totalNut = {
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    };

    let totalPrice = 0.00;

    current.forEach((item) => {
      totalNut.calories += parseFloat(item.nutrition.calories);
      totalNut.fat += parseFloat(item.nutrition.fat);
      totalNut.carbs += parseFloat(item.nutrition.carbs);
      totalNut.protein += parseFloat(item.nutrition.protein);
      totalPrice += parseFloat(item.nutrition.price);
    });

    console.log( current );

    const elmTotalNut = (elmCurrent.length > 0)
      ? (
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
      ) : null;

    return (
      <div className={classes.ingredientContainer}>
        {children}
        <div className={classes.lower}>
          <div className={classes.nameBox}>
            <input
              className={classes.nameBar}
              type="text"
              placeholder="Name..."
              onChange={this.handleNameChange}
              value={name}
            />
          </div>
          <div className={classes.list}>
            {elmCurrent.length > 0 ? (
              <div className={classes.title}>
                Ingredients
              </div>
            ) : null}
            {elmCurrent}
          </div>
          {elmTotalNut}
          {totalPrice > 0 ? (
            <div className={classes.tp}>
              {`Price - $${totalPrice.toFixed(2)}`}
            </div>
          ) : null}
          {stepTool}
          <div className={classes.submit} onClick={this.handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    );
  }
}

IngredientContainer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(IngredientContainer);
