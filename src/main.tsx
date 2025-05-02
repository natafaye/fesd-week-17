import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import TakeQuizPage from './components/TakeQuizPage'
import MakeQuizPage from './components/MakeQuizPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MakeQuizPage/>,
  },
  {
    path: "/take",
    element: <TakeQuizPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
