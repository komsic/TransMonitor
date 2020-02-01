import React from 'react';
import Menu from './Menu';
import overview from '../../assets/images/overview.svg';

export default {
  title: 'Menu',
  component: Menu,
};

const list = [
  {
    name: 'Overview',
    icon: overview,
  },
  {
    name: 'All Payments',
    icon: overview,
  },
  {
    name: 'All Orders',
    icon: overview,
  },
];

export const MenuStory = () => <Menu subMenuList={list} title="Main" />;
