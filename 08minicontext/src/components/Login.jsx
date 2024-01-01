import React, {useState, useContext} from 'react'
//13. useContext is hi ke sath me yaha docummantation start hota hai 
import UserContext from '../context/UserContext'  
//14. UI defind kar dete hai
function Login() {


 // 16. state lage gi values lage gi   
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
//15. button ko call kar ni padhe gi wo const me dal dete hai

//17. user context ke under jo value hai kese fetch karu  ga me tab kam me aata hai useContext
// jis tarike se useState use kara tha us tarike se useContext ko use kare ge 

 const {setUser} = useContext(UserContext)

// 18. handale submit me Event aaye ga 
const handleSubmit = (e ) =>{
e.preventDefault()
setUser({username, password})//19. aapne ko data bhej na tha  like username and password 
}
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
      value = {username}
      onChange={(e)=> setUsername(e.target.value) }
      placeholder='username' />
      {" "}
      <input type="text" 
      value = {password}
      onChange={(e)=> setPassword(e.target.value) }
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
