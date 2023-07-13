import React from 'react'
import { useSelector } from 'react-redux'


function Templateone() {

    const {Name , Title , Email , Number , Location} = useSelector(state => state.resume.UserInfo)

  return (
    <div className='template-1' >
        <div className='template-header' >
            <div className='name' >
                    <h1>{Name}</h1>
                    <h2>{Title}</h2>
            </div>
            <div className='contact' >
                <p>{Email}</p>
                <p>{Number}</p>
                <p>{Location}</p>
            </div>
        </div>
    </div>
  )
}

export default Templateone