/* eslint-disable no-console */
import React, { useState } from 'react';
import './Main.css';
import Stat from '../../components/stat/Stat';
import Dropdown from '../../components/dropdown/Dropdown';
import leftButton from '../../assets/images/left-button.svg';
import rightButton from '../../assets/images/right-button.svg';
import bDropdown from '../../assets/images/b-dropdown.svg';
import bigChart from '../../assets/images/big-chart.svg';
import Summary from '../../components/summary/Summary';
import Search from '../../components/search/Search';

const statList = [
  { title: 'Daily Transaction Volume', value: '2,342' },
  { title: 'Daily Transaction Value', value: '#4,000,000' },
  { title: 'Total Transaction Volume', value: '452,000' },
  { title: 'Total Transaction Value', value: '#4,000,000' },
];

let now = new Intl.DateTimeFormat(
  'en-GB',
  { day: 'numeric', month: 'short', year: 'numeric' },
).format(new Date());
now = now.split(' ');
now = `${now.slice(0, 1)}, ${now.slice(1).join(' ')}`;

const summaryList = [
  {
    title: 'Orders',
    list: [
      { name: 'Pending Orders', value: 20 },
      { name: 'Reconcilled Orders', value: 80 },
      { name: 'Total Orders', value: 100 },
    ],
    percentage: 80,
  },
  {
    title: 'Payments',
    list: [
      { name: 'Un-reconcilled Payments', value: 20 },
      { name: 'Reconcilled Payments', value: 80 },
      { name: 'Total Payments', value: 100 },
    ],
    percentage: 80,
  },
];

const tableData = [
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567890',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567891',
    time: '12:30',
    status: 'Reconcilled',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567892',
    time: '12:30',
    status: 'Un-reconcilled',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567893',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567894',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567895',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567896',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567897',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567898',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567899',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567810',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567811',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567812',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567813',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567814',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567815',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567816',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567817',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567818',
    time: '12:30',
    status: 'Pending',
  },
  {
    type: 'Apple Mac Book 15" 250 SSD 12GB',
    firstName: 'Victor',
    lastName: 'Wahab',
    price: '73430',
    transNo: '1234567819',
    time: '12:30',
    status: 'Pending',
  },
];

const Main = () => {
  const [search, setSearch] = useState('');

  const getClasses = (status) => {
    if (status === 'Reconcilled') return 'reconcilled';
    if (status === 'Un-reconcilled') return 'un-reconcilled';

    return '';
  };

  return (
    <div className="main">
      <ul>
        {statList.map(({ title, value }) => (
          <Stat
            title={title}
            value={value}
            key={title}
          />
        ))}
      </ul>

      <section className="board">
        <section className="board__chart">
          <div className="board-header">
            <h3>
              {'Today: '}
              <span>{now}</span>
            </h3>

            <Dropdown
              classes="chart"
              selected="1 Jan - 1 Jun"
              list={['1 Jan - 1 Jun', '1 Jul - 1 Dec']}
              onSelect={(name) => console.log(name)}
            />

            <span>
              <button type="button">
                <img src={leftButton} alt="left button" />
              </button>
              <button type="button">
                <img src={rightButton} alt="right button" />
              </button>
            </span>
          </div>

          <div className="board-chart">
            <img src={bigChart} alt="big chart" />
          </div>
        </section>

        <section className="board__summary">
          {summaryList.map(({ title, list, percentage }) => (
            <Summary
              title={title}
              list={list}
              percentage={percentage}
              key={title}
            />
          ))}
        </section>
      </section>

      <section className="table">
        <h2>Payments</h2>

        <div className="table__controls">
          <div className="info">
            <p>Showing</p>
            <Dropdown
              classes="number"
              selected="20"
              list={['5', '10', '15', '20']}
              onSelect={(name) => console.log(name)}
            />
            <p>out of 500 payments</p>
          </div>

          <Search
            value={search}
            onSearchChange={({ target: { value } }) => setSearch(value)}
            classes="bottom-border"
            placeholder="Search Payments..."
          />

          <div className="drop">
            <p>Show</p>

            <Dropdown
              selected="All"
              list={['All', 'Reconcilled', 'Un-reconciled', 'Settled', 'Unsettled']}
              onSelect={(name) => console.log(name)}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr className="table__head">
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {tableData.map(({
              type,
              firstName,
              lastName,
              price,
              transNo,
              time,
              status,
            }) => (
              <tr key={transNo}>
                <td>
                  <div className="type">
                    <p>{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</p>
                    <p>{type}</p>
                  </div>
                </td>
                <td>{`$${price}`}</td>
                <td>{transNo}</td>
                <td>{time}</td>
                <td>
                  <div className={`status ${getClasses(status)}`}>
                    <span />
                    <p>{status}</p>
                  </div>
                </td>
                <td><img src={bDropdown} alt="dropdown" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Main;
