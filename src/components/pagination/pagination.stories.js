import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

// eslint-disable-next-line react/prop-types
const StoryWithHook = ({ noOfPage }) => {
  const [state, setState] = useState(1);

  const setSelected = (n, selected) => {
    const s = Number(selected);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(Number(n))) {
      if (n === 'Previous' && s > 1) {
        setState(s - 1);
      } else if (n === 'Next' && s < noOfPage) {
        setState(s + 1);
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(`${n} clicked`);
      setState(n);
    }
  };

  return (
    <Pagination
      noOfPage={noOfPage}
      selected={state.toString()}
      onClick={setSelected}
    />
  );
};

export const PaginationStory = () => (
  <div style={{ backgroundColor: '#f7fbfa' }}>
    <StoryWithHook noOfPage={4} />
  </div>
);
