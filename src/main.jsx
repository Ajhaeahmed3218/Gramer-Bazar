import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>, 
    errorElement: <div><Link to={'/'} className="btn">Button</Link> </div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/register',
        // element: <Register /> 
      },
      {
        path: '/login',
        // element:  <Login /> 
      },
    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
