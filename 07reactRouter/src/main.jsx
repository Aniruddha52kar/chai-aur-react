import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import  User  from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github'
//Note - App.jsx ko lena hi nahi hai kyu ki direct aapn ne React-Router install kiya hai to sab main.jsx mai honga 
// 2. aapn lenge RouterProvider
// 3. router kese banate hai ?  aur ye 2 tarike se bante hai 
// 4. element lenege "layout se " kam to ek hi honga 
// 5. children lenege bohot value honge is liye [array liye]
//3.1 router ko bata diye kese bana diye kar ke pass kar diye value us me 
// child ke udner path waga re dal ke page add hote hai
// 4 loader - koi bhi data fetch kar na hai to direct api call yaha se hi mar sakh te hai

//**********//////***** */ */

//1st method are as follow

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
      
//     ]
//   }
// ])

// 2nd easy method are as follow
//createBrowserRouter se hi bane ga 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:userid' element={<User />} />
      <Route
      loader={githubInfoLoader}
       path='github'
      element={<Github />}
       />
    </Route>
  )
)

// route banaye kese user id wala 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
