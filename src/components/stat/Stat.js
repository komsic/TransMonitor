import React from 'react';
import PropTypes from 'prop-types';
import './Stat.css';
import smallChart from '../../assets/images/small-chart.svg';

const Stat = ({ title, value }) => (
  <li className="stat">
    <div className="stat__word">
      <p>{title}</p>
      <p>{value}</p>
    </div>

    <img src={smallChart} alt="profile" />
  </li>
);

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Stat;
