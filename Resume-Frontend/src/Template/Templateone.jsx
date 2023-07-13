import React from 'react'
import { useSelector } from 'react-redux'


function Templateone() {

    const {Name} = useSelector(state => state.resume.UserInfo)

  return (
    <div className='template-1' >
        <div className='name' >
            
        </div>
            <h1>{Name}</h1>
    </div>
  )
}

export default Templateone