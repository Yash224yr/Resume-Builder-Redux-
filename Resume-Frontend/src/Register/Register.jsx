import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { updateEmail, updatePassword, updateName } from '../Features/resumeSlice'
import { useSelector, useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';

function Register() {

  const inputRef = useRef()

  const { email, password, name } = useSelector(state => state.resume.register)
  const dispatch = useDispatch()

  useEffect(()=>{
      inputRef.current.focus()
  },[])

  function handlersubmit(e) {
    e.preventDefault()
  }


  return (
    <div className='register'  >
      <div className='register-box' >
        <h2>Sign Up To jobSage </h2>
        <div className='get-login' >
          <p>Already have an account ? </p>
          <Link  to="/login"  >Login</Link>
        </div>
        <form onSubmit={handlersubmit} >
          <input type="text" ref={inputRef} placeholder='Enter Your Name' value={name} onChange={(e) => { dispatch(updateName(e.target.value)) }} />
          <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => { dispatch(updateEmail(e.target.value)) }} />
          <input type="password" placeholder='Enter Password' value={password} onChange={(e) => { dispatch(updatePassword(e.target.value)) }} />
          <Link type='submit' ><button>Register</button></Link>
        </form>
        <div className='google' >
          <p>Or Login with</p>
          <button> <span><GoogleIcon /></span>  Sign up with Google</button>
        </div>
      </div>

    </div>
  )
}

export default Register