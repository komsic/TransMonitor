import React, { useState } from 'react';
import './SideMenu.css';
import overview from '../../assets/images/overview.svg';
import allPay from '../../assets/images/all-pay.svg';
import recPay from '../../assets/images/rec-pay.svg';
import unRecPay from '../../assets/images/unrec-pay.svg';
import manualSettlement from '../../assets/images/manual-settle.svg';
import allOrder from '../../assets/images/all-order.svg';
import pOrder from '../../assets/images/p-order.svg';
import rOrder from '../../assets/images/r-order.svg';
import profile from '../../assets/images/profile.svg';
import Menu from '../../components/menu/Menu';

const list = [
  {
    title: 'Main',
    subList: [{ name: 'Overview', icon: overview }],
  },
  {
    title: 'Payments',
    subList: [
      { name: 'All Payments', icon: allPay },
      { name: 'Reconcilled Payments', icon: recPay },
      { name: 'Un - Reconcilled Payments', icon: unRecPay },
      { name: 'Manual Settlement', icon: manualSettlement },
    ],
  },
  {
    title: 'Orders',
    subList: [
      { name: 'All Orders', icon: allOrder },
      { name: 'Pending Orders', icon: pOrder },
      { name: 'Reconcilled Orders', icon: rOrder },
    ],
  },
  { subList: [{ name: 'Merchant Profile', icon: profile }] },
];

const SideMenu = () => {
  const [selected, setSelected] = useState('Overview');

  return (
    <div className="side-menu">
      <button type="button" className="side__btn">Generate Invoice</button>

      <ul>
        {(list || []).map(({ title, subList }) => (
          <Menu
            title={title}
            subMenuList={subList}
            key={title}
            onSelect={setSelected}
            selected={selected}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
