import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './search.style';

class Search extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const { onSearch } = this.props;
    const { value } = this.state;

    onSearch(value);
  }

  handleChange(event) {
    const { onUpdate } = this.props;

    this.setState({ value: event.target.value });

    onUpdate(event.target.value);
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.search}>
        <input
          className={classes.searchBar}
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
          value={value}
        />
        <div className={classes.searchButton} onClick={this.handleSearch}>
          <img className={classes.searchIcon} src="images/search.svg" alt="search" />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Search);
