import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import Banner from '../../Home/Banner/Banner';

const Menu = () => {
  return (
    <div>
      
      <Helmet>
        <title>Restaurant | Menu</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;