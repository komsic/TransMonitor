import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import SideMenu from './side/SideMenu';
import Main from './main/Main';
import Pagination from '../components/pagination/Pagination';

const total = 20;
const start = 1;
const end = 10;

function App() {
  const [state, setState] = useState(1);
  const noOfPage = 2;

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
    <div className="app">
      <Header />

      <div className="second">
        <SideMenu />
        <Main />
      </div>

      <div className="footer">
        <div className="propo" />

        <div className="table-footer">
          <p>{`Showing ${start} to ${end} of ${total} entries`}</p>

          <Pagination
            noOfPage={noOfPage}
            selected={state.toString()}
            onClick={setSelected}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
