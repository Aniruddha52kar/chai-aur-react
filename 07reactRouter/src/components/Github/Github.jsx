import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


//1. github kese laye API call se
//2. useeffect 1st time call hota jese page mount honga tab kam ho jaye ga
//   fetch kare ge fir (1.then) lagaye ge jis me response aaye ga 
//   (2.then) mai data call aaye ga    
//3.  useState hai jaha use kar na hai use setData call kro 
// 4 Hook hai yaha ek hook laga na padhe ga "useLoderData" ye hook hai


function Github() {
const data =  useLoaderData()
    // const [data, setData] = useState ([])
    // useEffect(() => {
    //     fetch('https://api.github.com/user/hiteshchoudhary')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
 const response = await fetch('https://api.github.com/user/hiteshchoudhary')
 return response.json()

}
