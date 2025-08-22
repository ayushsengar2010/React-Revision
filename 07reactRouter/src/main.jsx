import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , Routes , Route} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     Children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element :<About />
//       }
//     ]

//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>
  
  </StrictMode>,
)
