import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PlanningPage from './components/PlanningPage/PlanningPage'
import ShoppingPage, { shoppingLoader } from './components/ShoppingPage/ShoppingPage'

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // The overall layout for every page in the app
    children: [
      {
        path: "/",
        element: <PlanningPage/>,
      },
      {
        path: "/shopping",
        element: <ShoppingPage/>,
        loader: shoppingLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
