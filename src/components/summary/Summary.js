import React from 'react';
import PropTypes from 'prop-types';
import './Summary.css';
import ProgressBar from '../progress/ProgressBar';

const Item = ({ name, value }) => (
  <p>
    {`${name}:`}
    <span>{value}</span>
  </p>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const Summary = ({ title, list, percentage }) => (
  <div className="summary">
    <h5>{title}</h5>

    <ProgressBar progress={percentage} />

    {list.map(({ name, value }) => (
      <Item
        name={name}
        value={value}
        key={name}
      />
    ))}
  </div>
);

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Summary;
