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
import AddItems from "../Pages/Deshbord/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Deshbord/ManageItems/ManageItems";
import UpdateItem from "../Pages/Deshbord/UpdateItem/UpdateItem";
import Payment from "../Pages/Deshbord/Payment/Payment";
import PaymentHistory from "../Pages/Deshbord/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Deshbord/UserHome/UserHome";
import AdminHome from "../Pages/Deshbord/AdminHome/AdminHome";

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
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      },

      // admin routs
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element: <AdminRoute> <ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'user',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);