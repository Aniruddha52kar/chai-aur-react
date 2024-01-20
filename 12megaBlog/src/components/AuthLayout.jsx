import React, {useState, useEffect} from 'react'
import { UseSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication = true}) {
  
    const navigate = useNavigate()
    const [loader, setLoader] = useState (true)
    const authStatus = useSelector (state => state.auth.status)

    useEffect(() => {
        // false && false 
        //TODO: make it more easy to understand
        // easy method
        // if(authStatus === true){
        //     navigate("/")
        // } else if(authStatus === false){
        //     navigate("/login")
        // }

        // let authValue  = authStatus === true ? true : false;

        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)

        
    }, [authStatus, navigate, authentication]) // useEffect bataye ga login hu ki nahi hu 
  
    return loader ? <h1>Loading...</h1> : <>{children}</>
  
}


