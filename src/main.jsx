import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import Admin from './Admin'
import User from './User'
import Owner from './Owner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Admin',
    element: <Admin />
  },
  {
    path: '/User',
    element: <User />
  },
  {
    path: '/Owner',
    element: <Owner />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
