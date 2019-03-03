import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './stepper.style';

class Stepper extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAdd() {
    const { step } = this.props;
    const { value } = this.state;

    step(value);
    this.setState({ value: '' });
  }

  render() {
    const { classes, steps } = this.props;
    const { value } = this.state;

    const elmSteps = steps.map((step, i) => (
      <div key={step + i} className={classes.step}>
        {step}
      </div>
    ));

    return (
      <div className={classes.stepper}>
        {elmSteps.length > 0 ? (
          <div className={classes.title}>
            Steps
          </div>
        ) : null}
        {elmSteps}
        <div className={classes.lower}>
          <input
            className={classes.addBar}
            type="text"
            placeholder="Add Step"
            onChange={this.handleChange}
            value={value}
          />
          <div className={classes.addButton} onClick={this.handleAdd}>
            <img className={classes.addIcon} src="images/add.svg" alt="add" />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Stepper);
