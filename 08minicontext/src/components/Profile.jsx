import React, {useContext} from 'react'
import {UserContext} from '../context/UserContext'
//20/ yaha pura pass kar ke improt karo 

function Profile() {

    //21. jo kam waha kiya tha yaha kar lo  aur user lena 
    const {user} = useContext(UserContext)

    //22. if else wala syntext hai yaha par ye sirf jsx return kara hai
    if (!user)  return   <div> please login</div>
    //24.false hai to niche ka return kare ga 
    //25. app.jsx

    return <div>welcome {user.username}</div> //24. jo bhi user name hai user me se user extract kr ta hai
        
    

  return (
    <div>
      
    </div>
  )
}

export default Profile
