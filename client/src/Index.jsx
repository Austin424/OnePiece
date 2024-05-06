//React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//Page Component Imports
import Home from './pages/Home.jsx'
import Page1 from './pages/Page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'

//CSS
import './index.css'

//React Routes

const router = createBrowserRouter([

  {
    path:"/",
    element: <Home/>,
    children: [
      {
        path:"page1",
        element: <Page1/>
      },
      {
        path:"page2",
        element: <Page2/>
      },
      {
        path:"page3",
        element: <Page3/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
