import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'
import './App.css'
import Root from './routes/Root'
import Dashboard from './routes/Dashboard'
import ErrorPage from './routes/ErrorPage'
import QRCodeScanner from './routes/QRCodeScanner'
import Login from './routes/Login'
import Report from './routes/Report'
import ListeRapport from './routes/ListeRapport'
import ListePhotos from './routes/ListePhotos'
import ListeComptes from './routes/ListeComptes'
import Logout from './routes/Logout'
import AddAccount from './routes/AddAccount'

const router = createBrowserRouter([
  {
    path: "*",
    element: <h2>Not Found</h2>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "Logout",
    element: <Logout />,
  },

  {
    path: "/admin",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      }, 
      {
        path: "Scanner",
        element: <QRCodeScanner />,
      }, 
      {
        path: "Rapport",
        element: <Report />,
      },
      {
        path: "ListeRapports",
        element: <ListeRapport />,
      },
      
      {
        path: "ListePhotos",
        element: <ListePhotos />,
      },
      
      {
        path: "ListeComptes",
        element: <ListeComptes />,
      },

      {
        path: "Compte",
        element: <AddAccount />,
      },

      {
        path: "*",
        element: <h2>Not Found</h2>,
      },
    ],
    
    
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)