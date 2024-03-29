import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsCart } from "react-icons/bs";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [isAdmin]=useAdmin()
  const [cart]=useCart()
  console.log(cart)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }



  return (
    <>
      <div className="navbar fixed z-30 bg-opacity-25 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="btn btn-ghost lg:hidden" tabIndex={0} role="button" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Our Menu</Link></li>
                <li><Link to='/order/salad'>Order Food</Link></li>
                
                {
                  user && isAdmin && <li><Link to='/dashboard/adminHome'>Deshboard</Link></li>
                }

                {
                  user && !isAdmin && <li><Link to='/dashboard/userHome'>Deshboard</Link></li>
                }
                <li>
                <Link to="/dashboard/cart">
                  <button className="btn">
                  <BsCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>
              </li>

                {
                  user ? <>
                    <span className="text-white" >{user?.displayName}</span>
                    <li onClick={handleLogOut} className="btn btn-ghost">Log Out</li>
                  </> : <>
                    <li><Link to='/login'>Login</Link></li>
                  </>
                }
              </>


            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1">
            <>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/menu'>Our Menu</Link></li>
              <li><Link to='/order/salad'>Order Food</Link></li>
              {
                  user && isAdmin && <li><Link to='/dashboard/adminHome'>Deshboard</Link></li>
                }

                {
                  user && !isAdmin && <li><Link to='/dashboard/userHome'>Deshboard</Link></li>
                }

              <li>
                <Link to="/dashboard/cart">
                  <button className="btn">
                  <BsCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>
              </li>

              {
                user ? <>
                  <span className="text-white" >{user?.displayName}</span>
                  <li onClick={handleLogOut} className="btn  btn-ghost">Log Out</li>
                </> : <>
                  <li><Link to='/login'>Login</Link></li>
                </>
              }
            </>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;