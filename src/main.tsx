import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './components/HomePage';
import EmployeesPage from './components/EmployeesPage';
import AddPaycheckPage, { employeesLoader } from './components/AddPaycheckPage';
import Layout from './components/Layout';
import PaychecksPage, { paychecksLoader } from './components/PaychecksPage';
import EmployeeDetailsPage, { employeeDetailsLoader } from './components/EmployeeDetailsPage';

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage
      },
      {
        path: "/employees",
        Component: EmployeesPage
      },
      {
        path: "/employees/:employeeId",
        loader: employeeDetailsLoader,
        Component: EmployeeDetailsPage
      },
      {
        path: "/paychecks",
        loader: paychecksLoader,
        Component: PaychecksPage
      },
      {
        path: "/paychecks/add",
        loader: employeesLoader,
        Component: AddPaycheckPage
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
