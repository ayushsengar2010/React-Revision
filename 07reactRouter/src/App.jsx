import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Layout from './Layout'
import Contact from './Contact/Contact'
import User from './User/User'
import Github from './Github/Github'
import { githubInfoLoader } from './Github/Github'

function App() {
  

  const Myrouter = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children:[
        {
          index : true,
          element : <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element:<Contact />
        },
        {
          path:"user/:userid",
          element: <User />
        },
        {
            loader: githubInfoLoader,
          path:"github",
          element:<Github /> 
        }
      ]
    }
  ])

  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='user/userid' element={<User/>}/>
        </Route>
      </Routes>
    </BrowserRouter> */}

    <RouterProvider router={Myrouter}/>
    </>
  )
}

export default App
