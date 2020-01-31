import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import searchIcon from '../../assets/images/Search.svg';

const Search = ({
  onSearchChange, value, classes, placeholder,
}) => (
  <div className={`search ${classes || ''}`}>
    <input type="text" value={value} onChange={onSearchChange} placeholder={placeholder} />
    <img src={searchIcon} alt="search icon" />
  </div>
);

Search.propTypes = {
  classes: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  classes: '',
  placeholder: 'Search...',
};

export default Search;
