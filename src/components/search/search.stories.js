import React, { useState } from 'react';
import Search from './Search';

export default {
  title: 'Search',
  component: Search,
};

// eslint-disable-next-line react/prop-types
const StoryWithHook = ({ classes, placeholder }) => {
  const [state, setState] = useState('');

  /* istanbul ignore next */
  const onChange = ({ target: { value } }) => setState(value);

  return (
    <Search
      value={state}
      onSearchChange={onChange}
      classes={classes}
      placeholder={placeholder}
    />
  );
};

export const NormalSearch = () => <StoryWithHook />;
export const BottomBorderSearch = () => <StoryWithHook classes="bottom-border" placeholder="Search Payments..." />;
