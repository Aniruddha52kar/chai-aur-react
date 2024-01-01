//  aur ye file jsx me bana na padhe ga

//3. abhi ek provider bana na padhe ga
//is ke bana ne ke 2 tarike hai

import React from 'react';
import UserContext from './UserContext'; // idhar S captial me rakh na

//4. ye aapna ban gya provider
//5. children - children jese div dete ho wese hi children hai aur ye ek generaic nam hai
// 6.children ko wrap kar na padhe ga
//7. userContext.provider kam nahi honga but access kya kare ga to data dena padhe ga na

const UserContextProvider = ({ children }) => {
    
    const [user, setUser] = React.useState(null)// 8. yaha par kuch bhi value de sakh te hai jo aap ko lag ta hai [] ya null jo aap ko lag ta hai 
//9. prop pass kare hai value nam se us ke liye {{}} dubble me object pass kar na padhe ga 

  return( 
  
  <UserContext.Provider value={{user, setUSer}}>
    {children}
    </UserContext.Provider>
  
  )
};

export default UserContextProvider;
