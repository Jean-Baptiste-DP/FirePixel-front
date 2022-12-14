import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'

import WebSocket from './WebSocket'

import Root from './routes/root'
import Error from './routes/error'
import Screen from './routes/screen'
import Phone from './routes/phone'
import Home from './routes/home'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "screen",
        element: <WebSocket Component={Screen} type="screen"/>,
      },
      {
        path: "phone",
        element: <WebSocket Component={Phone} type="phone"/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
