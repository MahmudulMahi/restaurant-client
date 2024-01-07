import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Deshbord = () => {
  return (
    <div className='flex '>
      <div className='w-64 min-h-screen bg-orange-400'>
      <ul className='menu'>
        <li><NavLink to ='/dashboard/useHome'> <FaHome /> User Home</NavLink></li>
        <li><NavLink to ='/dashboard/reservation'> <FaCalendarAlt /> Reservation</NavLink></li>
        <li><NavLink to ='/dashboard/cart'> <FaCartArrowDown /> My Cart</NavLink></li>
        <li><NavLink to ='/dashboard/review'> <FaCartArrowDown /> Add Review</NavLink></li>
        <li><NavLink to ='/dashboard/bookings'> <FaCartArrowDown /> My Bookings</NavLink></li>
        <div className="divider"></div>
        <li><NavLink to ='/'> <FaHome />  Home</NavLink></li>
        <li><NavLink to ='/menu'> <FaHome /> Menu</NavLink></li>
        <li><NavLink to ='/order/salad'> <FaHome />Order</NavLink></li>
      </ul>
      </div>
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;