import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Deshbord from "../LayOut/Deshbord";
import Cart from "../Pages/Deshbord/Cart/Cart";
import AllUsers from "../Pages/Deshbord/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute> <Deshbord></Deshbord> </PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin routs
      {
        path: 'user',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);