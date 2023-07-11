import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateEmail, updatePassword, updateName } from '../Features/resumeSlice'
import { useSelector, useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';
import axios from "axios"

function Register() {


  const inputRef = useRef()
  const [error, setError] = useState("")
  const [popup, setPopUp] = useState("")

  const { email, password, name } = useSelector(state => state.resume.register)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handlersubmit(e) {
    e.preventDefault()
    if (name === "" || email === "" || password === "") {
      setError("*please fill all the details")
      return;
    }
    else {
      setError("")
    }
    axios.post("http://localhost:3000/register", {
      name: name,
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error)
          setError("Email Already Exists")
          dispatch(updateEmail(""))
        }
        else {
          setPopUp("Registered Sucessfully !")
          dispatch(updateName(""))
          dispatch(updateEmail(""))
          dispatch(updatePassword(""))
        }
      })
  }

  function handlerdone(){
    setPopUp("")
    navigate("/login")
  }


  return (
    <div className='register'  >
      <div className='register-box' >
        <h2>Sign Up To jobSage </h2>
        <div className='get-login' >
          <p>Already have an account ? </p>
          <Link to="/login"  >Login</Link>
        </div>
        {
          error && <p className='error-fill'  >{error}</p>
        }
        <form onSubmit={handlersubmit} >
          <input type="text" ref={inputRef} placeholder='Enter Your Name' value={name} onChange={(e) => { dispatch(updateName(e.target.value)) }} />
          <input type="text" placeholder='Enter Your Email' value={email} onChange={(e) => { dispatch(updateEmail(e.target.value)) }} />
          <input type="password" placeholder='Enter Password' value={password} onChange={(e) => { dispatch(updatePassword(e.target.value)) }} />
          <button type='submit'  >Register</button>
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

export default Register