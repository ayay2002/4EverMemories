import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/register',
        element: <Register />
      }, {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)