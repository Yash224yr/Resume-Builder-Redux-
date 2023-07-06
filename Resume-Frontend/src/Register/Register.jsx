import React from 'react'
import { Link } from 'react-router-dom'
import { updateEmail , updatePassword , updateName} from '../Features/resumeSlice'
import { useSelector , useDispatch  } from 'react-redux'
import GoogleIcon from '@mui/icons-material/Google';

function Register() {

  const {email , password , name} = useSelector(state => state.resume.register)
  const dispatch = useDispatch()

  function handlersubmit(e){
    e.preventDefault()
  }


  return (
    <div className='register'  >
      <div className='register-box' >
      <form  onSubmit={handlersubmit} >
            <input type="text" placeholder='Enter Password' value={name} onChange={(e)=>{dispatch(updateName(e.target.value))}} />
            <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>{dispatch(updateEmail(e.target.value))}} />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{dispatch(updatePassword(e.target.value))}} />
            <Link type='submit' ><button>Register</button></Link>
        </form>
        <div className='login' > 
          <h2>Already have an account ? </h2>
          <Link>Login</Link>
        </div>
        <div className='google' >
          <h1>Or Login with</h1>
          <button>Gmail  <span><GoogleIcon/></span> </button>
        </div>
      </div>
           
    </div>
  )
}

export default Register