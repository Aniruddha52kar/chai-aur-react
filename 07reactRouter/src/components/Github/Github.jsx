import React, { useState } from 'react'
import { useEffect } from 'react'

//1. github kese laye API call se
//2. useeffect 1st time call hota jese page mount honga tab kam ho jaye ga
//   fetch kare ge fir (1.then) lagaye ge jis me response aaye ga 
//   (2.then) mai data call aaye ga    
//3.  useState hai jaha use kar na hai use setData call kro 
function Github() {
    const [data, setData] = useState ([])
    useEffect(() => {
        fetch('https://api.github.com/user/hiteshchoudhary')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })

    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers:
      
    </div>
  )
}

export default Github
