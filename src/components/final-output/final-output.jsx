import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import styles from './final-output.style';

class FinalOutput extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

  render() {
    const { price, nut, classes } = this.props;

    return (
      <Fragment>
        <div className={classes.title}>Total</div>
        <div className={classes.nutContainer}>
          <div className={classes.calories}>
            <div>Cal</div>
            <div>{nut.calories.toFixed(2)}</div>
          </div>
          <div className={classes.fat}>
            <div>Fat</div>
            <div>{nut.fat.toFixed(2)}</div>
          </div>
          <div className={classes.carbs}>
            <div>Carbs</div>
            <div>{nut.carbs.toFixed(2)}</div>
          </div>
          <div className={classes.protein}>
            <div>Prot</div>
            <div>{nut.protein.toFixed(2)}</div>
          </div>
          <div className={classes.protein}>
            <div>Price</div>
            <div>{`$${price.toFixed(2)}`}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(FinalOutput);
