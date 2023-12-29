import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";


//note - react dom se intaresting chij milti hai jaha par bhi 'Outlet' diya hai 
// waha chije same rahe gi  

 function Layout() {
    

    return (
        <>
        <Header />
        <Outlet />
        <Footer />
            
        </>
    )
}

export default Layout
