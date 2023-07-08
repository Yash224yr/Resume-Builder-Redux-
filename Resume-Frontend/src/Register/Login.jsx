import React from 'react'
import { Link } from 'react-router-dom'
import { updateloginEmail, updateloginPassword } from '../Features/resumeSlice'
import { useSelector, useDispatch } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';


function Login() {

  const { loginEmail, loginPassword } = useSelector(state => state.resume.login)
  const dispatch = useDispatch()


  function handlersubmit(e) {
    e.preventDefault()
  }

  return (
    <div className='login'  >
      <div className='login-box' >
        <h2>Login To jobSage </h2>
        <div className='get-register' >
          <p>Don't Have an Account ? </p>
          <Link>Sign Up</Link>
        </div>
        <form onSubmit={handlersubmit} >
          <input type="text" placeholder='Enter your Email' value={loginEmail} onChange={(e) => { dispatch(updateloginEmail(e.target.value)) }} />
          <input type="text" placeholder='Enter your Password' value={loginPassword} onChange={(e) => { dispatch(updateloginPassword(e.target.value)) }} />
          <Link type='submit' ><button>Login</button></Link>
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