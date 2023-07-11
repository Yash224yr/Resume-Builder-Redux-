import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { updateloginEmail, updateloginPassword } from '../Features/resumeSlice'
import { useSelector, useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';


function Login() {
  
  const [error , setError] = useState("")

  const inputRef = useRef()

  const { loginEmail, loginPassword } = useSelector(state => state.resume.login)
  const dispatch = useDispatch()

  

  useEffect(()=>{
    inputRef.current.focus()
  },[])


  function handlersubmit(e) {
    e.preventDefault()
    if(loginEmail === "" || loginPassword === ""){
      setError("*Please fill all the details")
    }
  }

  return (
    <div className='login'  >
      <div className='login-box' >
        <h2>Login To jobSage </h2>
        <div className='get-register' >
          <p>Don't Have an Account ? </p>
          <Link to="/register">Sign Up</Link>
        </div>
        {
          error && <p  className='error-fill' >{error}</p>
        }
        <form onSubmit={handlersubmit} >
          <input type="text"  ref={inputRef} placeholder='Enter your Email' value={loginEmail} onChange={(e) => { dispatch(updateloginEmail(e.target.value)) }} />
          <input type="text" placeholder='Enter your Password' value={loginPassword} onChange={(e) => { dispatch(updateloginPassword(e.target.value)) }} />
          <button type='submit' >Login</button>
        </form>
        <div className='google' >
          <p>Or Login with</p>
          <button> <span><GoogleIcon /></span>  Sign up with Google</button>
        </div>
      </div>

    </div>
  )
}

export default Login