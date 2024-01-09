import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCartArrowDown, FaEnvelope, FaList, FaSearch, FaUser, FaUtensilSpoon, FaVoicemail } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Deshbord = () => {
  const [cart] = useCart()

  const isAdmin = true
  return (
    <div className='flex '>
      <div className='w-64 min-h-screen bg-orange-400'>
        <ul className='menu'>
          {
            isAdmin ? <>
              <li><NavLink to='/dashboard/adminHome'> <FaHome /> ADmin Home</NavLink></li>
              <li><NavLink to='/dashboard/addItems'> <FaUtensilSpoon /> Add Items</NavLink></li>
              <li><NavLink to='/dashboard/ManageItems'> <FaList /> Manage Items ({cart.length})</NavLink></li>
              <li><NavLink to='/dashboard/bookings'> <FaBook /> Manage Booking</NavLink></li>
              <li><NavLink to='/dashboard/user'> <FaUser /> All Users</NavLink></li>
            </>
              :
              <>
                <li><NavLink to='/dashboard/useHome'> <FaHome /> User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt /> Reservation</NavLink></li>
                <li><NavLink to='/dashboard/cart'> <FaCartArrowDown /> My Cart ({cart.length})</NavLink></li>
                <li><NavLink to='/dashboard/review'> <FaCartArrowDown /> Add Review</NavLink></li>
                <li><NavLink to='/dashboard/bookings'> <FaCartArrowDown /> My Bookings</NavLink></li>
              </>
          }
          <div className="divider"></div>
          <li><NavLink to='/'> <FaHome />  Home</NavLink></li>
          <li><NavLink to='/menu'> <FaHome /> Menu</NavLink></li>
          <li><NavLink to='/order/salad'> <FaSearch />Order</NavLink></li>
          <li><NavLink to='/order/salad'> <FaEnvelope />Contact</NavLink></li>
        </ul>
      </div>
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;