import './App.css'
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from './context/userContextProvider' 


function App() {
  
//10. UserContextProvider yaha dal diye aapn ne 
  return (
    <UserContextProvider>
  
  <h1>React with Chai and share is important </h1>
  <Login /> 
  <Profile />
  </UserContextProvider>
  )
  //26. login and profile import kara na padhe ga yaha 
  // 11.jo bhi component hai us me  directly access mil jaye ga 
  //12 Create components - login and profile 
}

export default App

//
