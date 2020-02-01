import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import dropdownImg from '../../assets/images/s-dropdown.svg';
import blueDropdownImg from '../../assets/images/s-dropdown-blue.svg';

const Dropdown = ({
  selected, list, classes, onSelect,
}) => {
  const [toggle, setToggle] = useState(false);

  const handleSelect = () => {
    setToggle(!toggle);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSelect();
    }
  };

  return (
    <div className={`dropdown ${toggle ? 'click' : ''}`}>
      <div
        className={`dropdown__head ${classes || ''}`}
        onClick={handleSelect}
        onKeyPress={handleKeyPress}
        role="menuitem"
        tabIndex={0}
      >
        <input type="text" readOnly value={selected} />

        <img
          src={(classes === 'number' || classes === '') ? blueDropdownImg : dropdownImg}
          alt="dropdown arrow"
        />
      </div>

      <div className={`dropdown__menu ${classes || ''}`}>
        {list.map((name, index) => (
          <div
            tabIndex={index}
            role="menuitem"
            onClick={() => onSelect(name)}
            key={name}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  classes: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  selected: '',
  classes: '',
};

export default Dropdown;
