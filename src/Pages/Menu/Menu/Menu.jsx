import React from 'react';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Restaurant | Menu</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <h2>menu</h2>
    </div>
  );
};

export default Menu;