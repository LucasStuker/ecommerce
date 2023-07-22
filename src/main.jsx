import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './view/Login/Login.jsx';
import Home from './view/Home/Home.jsx';
import Products from './view/Products/Products.jsx';
import{ PRODUCTS_MOCK} from "./mock/product.mock"
import Pay from "./view/Pay/Pay"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK}/>
  },
  {
    path: "/Home",
    element: <Login />
 },
  {
   path: "/Products/:productId",
   element: <Products data ={PRODUCTS_MOCK} />
  },
  {
    path: "/Pay",
    element: <Pay data ={PRODUCTS_MOCK} />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
