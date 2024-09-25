import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'
import AppointmentsPage from './AppointmentsPage'
import ColorPage from './ColorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/appointments",
        element: <AppointmentsPage/>
      },
      {
        path: "/:colorList",
        element: <ColorPage/>
      }
    ]
  }
])

// "/434343"
// { colorList: "434343" }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
