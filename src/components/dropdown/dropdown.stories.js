import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DropdownStory = () => {
  const [selected, setSelected] = useState('All');

  return (
    <Dropdown
      selected={selected}
      list={['All', 'Reconcilled', 'Un-reconciled', 'Settled', 'Unsettled']}
      onSelect={(name) => setSelected(name)}
    />
  );
};

export const AnotherDropdownStory = () => {
  const [selected, setSelected] = useState('1 Jan - 1 Jun');

  return (
    <Dropdown
      classes="chart"
      selected={selected}
      list={['1 Jan - 1 Jun', '1 Jul - 1 Dec']}
      onSelect={(name) => setSelected(name)}
    />
  );
};

export const NumberDropdownStory = () => {
  const [selected, setSelected] = useState('20');

  return (
    <Dropdown
      classes="number"
      selected={selected}
      list={['5', '10', '15', '20']}
      onSelect={(name) => setSelected(name)}
    />
  );
};
