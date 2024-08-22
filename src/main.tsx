import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard.tsx'
import NewAppointmentPage from './NewAppointmentPage.tsx'
import Layout from './Layout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <div>Welcome to my website!</div>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/newAppointment",
        element: <NewAppointmentPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
