import React from 'react'
import { useParams } from "react-router-dom";

// note -  useParams ye aata kaha se hai ye react-router dom se aata hai 
// main mai jake yaha par call kar na userid ko

function User() {

    const {userid} = useParams()

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
        User: {userid}
      
    </div>
  )
}

export default User;
