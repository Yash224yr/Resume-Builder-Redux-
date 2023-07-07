import React from 'react'
import register from "./images/register.jpg"
import Register from './Register/Register'

function Authentication() {
  return (
    <div className='auth' >
      <div className='auth-box' >
      <div className='image' >
                <img src={register} alt="" />
            </div>
            <div className='form' >
                    <Register></Register>
            </div>
      </div>
           
    </div>
  )
}

export default Authentication