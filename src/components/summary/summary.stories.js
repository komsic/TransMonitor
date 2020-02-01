import React from 'react';
import Summary from './Summary';

export default {
  title: 'Summary',
  component: Summary,
};

export const SummaryStory = () => (
  <Summary
    title="Orders"
    list={[
      { name: 'Pending Orders', value: 20 },
      { name: 'Reconcilled Orders', value: 80 },
      { name: 'Total Orders', value: 100 },
    ]}
    percentage={80}
  />
);
