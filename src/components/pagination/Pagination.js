import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ selected, onClick, noOfPage }) => {
  const list = [
    'Previous',
    ...[...Array(noOfPage).keys()].map((n) => (n + 1).toString()),
    'Next',
  ];

  // eslint-disable-next-line no-restricted-globals
  const getClasses = (n) => (isNaN(Number(n)) ? 'not-number' : '');

  return (
    <div className="pagination">
      {list.map((n) => (
        <button
          className={`${getClasses(n)} ${n === selected ? 'active' : ''}`}
          disabled={n === selected}
          type="button"
          key={n}
          onClick={() => onClick(n, selected)}
        >
          {n}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  // classes: PropTypes.string,
  noOfPage: PropTypes.number.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  // classes: '',
  // placeholder: 'Search...',
};

export default Pagination;
