import React from 'react';
import { Navigate, createBrowserRouter} from 'react-router-dom';
import Layout from '../Components/Layout';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Orders from '../Pages/Orders';
import Profile from '../Pages/Profile';
import Wishlist from '../Pages/Wishlist'
import { Cart } from '../Pages/Cart';
import ProductInfo from '../Pages/ProductInfo';
import Signup from '../Pages/Signup';
import { ProtectedRoutes } from './ProtectedRoutes';
import Dashboard from '../Pages/Admin/Dashboard';
import { ProtectedRoutesForAdmin } from './ProtectedRoutesforAdmin';
import NotFound from '../Pages/NotFound';
import AddProducts from '../Pages/Admin/AddProducts';
import UpdateProducts from '../Pages/Admin/UpdateProducts';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:"",
                element: <Home/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
            {
                path: "orders",
                element: (
                    <ProtectedRoutes>
                      <Orders />
                    </ProtectedRoutes>
                  ),
            },
            {
                path: "profile",
                element: <Profile/>,
            },
            {
                path: "cart",
                element: <Cart/>,
            },
            {
                path:"productinfo/:id",
                element: <ProductInfo/>, // Work upon this component to display the product details
            },
            {
                path:"wishlist",
                element: <Wishlist/>,
            },
            {
                path: 'dashboard',
                element: (<ProtectedRoutesForAdmin>
                <Dashboard/>
                </ProtectedRoutesForAdmin>),
            },
        ]
    },
    { 
        path:'login', // created a seperate route for login page
        element: <Login/>
    },
    {
        path: 'signup',
        element: <Signup/>  
    },
    
    {
        path: 'addproducts',
        element: <AddProducts/>
    },
    {
        path: 'updateproducts',
        element: <UpdateProducts/>
    },
    {
        path:'*',
        element: <NotFound/>
    }
],
)

export default router
