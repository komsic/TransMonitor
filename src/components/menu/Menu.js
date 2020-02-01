import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

export const SubMenu = ({
  name, icon, onSelect, selected,
}) => (
  <li
    className={`sub-menu__item ${selected === name ? 'active' : ''}`}
    onClick={() => onSelect(name)}
  >
    <img src={icon} alt={name} />

    <a>{name}</a>
  </li>
);
SubMenu.propTypes = {
  selected: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const Menu = ({
  subMenuList, title, onSelect, selected,
}) => (
  <li className="menu__item">
    <h5 className={title ? '' : 'hide'}>{title}</h5>

    <ul>
      {(subMenuList || []).map(({ name, icon }) => (
        <SubMenu
          name={name}
          icon={icon}
          key={name}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </ul>
  </li>
);

Menu.propTypes = {
  subMenuList: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  selected: '',
  title: '',
  subMenuList: [],
};

export default Menu;
