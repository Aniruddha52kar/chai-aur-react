import React from 'react'
import { UseDispatch } from 'react-redux'
import AuthService from '../../appwrite/config' // logout service laliye
import {logout} from '../../store/authSlice' // ye bhi same hai
function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        AuthService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
   <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn
