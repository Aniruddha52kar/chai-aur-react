import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App






// import './App.css'
// import React, {useEffect, useState} from 'react'
// import {useDispatch} from 'react-redux' // dispatch redux me se aaye ga 
// import authService from './appwrite/auth'
// import {login, logout} from "./store/authSlice" // kya chaiye login and log out 

// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// // dispatch ek marger hai redux aur react ke sath use kar na hai to 
// // user login hai ki nahi wo dekh lenge login logout se 


// function App() {

//   const [loading, setLoading] = useState(true); // aplication mount hui to true hui wah use effect wark kara hai 
//   const dispatch = useDispatch()//dispatch to lage ga use state me changes kare ge to 

//   useEffect (()=>{
//     authService.getCurrentUser() // agar mil gya to
//     .then((userData) => {// agar user data ai to 
//       if (userData) {
//         dispatch(login({userData}))// object pass kar diye 
//       }else {
//         dispatch(logout())
//       }

//     }) // ek .then laga denge 

//     .finally(() => setLoading(false)) // .finally ho ya .catch ho to finally run hota hi hai any how  
  
//   }, [])
  
//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//           TODO: <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null
 
  
// }

// export default App
