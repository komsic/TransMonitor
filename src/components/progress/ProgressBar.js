import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  let p = progress;
  if (progress > 100) p = 100;
  // eslint-disable-next-line no-restricted-globals
  if (progress < 0 || isNaN(progress)) p = 0;

  return (
    <div className="progress-outer">
      <div className="progress-inner" style={{ width: `${p}%` }} />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
