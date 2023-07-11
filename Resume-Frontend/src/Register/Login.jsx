import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { updateloginEmail, updateloginPassword } from '../Features/resumeSlice'
import { useSelector, useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';


function Login() {

  const [error, setError] = useState("")
  const [popup, setPopUp] = useState("")


  const inputRef = useRef()

  const { email, password } = useSelector(state => state.resume.login)
  const dispatch = useDispatch()



  useEffect(() => {
    inputRef.current.focus()
  }, [])


  function handlersubmit(e) {
    e.preventDefault()
    if (email === "" || password === "") {
      setError("*Please fill all the details")
    }
    else {
      setError("")
    }
    axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        dispatch(updateloginEmail(""))
        dispatch(updateloginPassword(""))
        setPopUp(response.data.message)
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handlerdone(){
    setPopUp("")
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
          error && <p className='error-fill' >{error}</p>
        }
        <form onSubmit={handlersubmit} >
          <input type="text" ref={inputRef} placeholder='Enter your Email' value={email} onChange={(e) => { dispatch(updateloginEmail(e.target.value)) }} />
          <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => { dispatch(updateloginPassword(e.target.value)) }} />
          <button type='submit' >Login</button>
        </form>
        <div className='google' >
          <p>Or Login with</p>
          <button> <span><GoogleIcon /></span>  Sign up with Google</button>
        </div>
      </div>
      {popup && (
        <div className='popup'>
          <p>{popup}</p>
          <button onClick={handlerdone}>Close</button>
        </div>
      )}

    </div>
  )
}

export default Login