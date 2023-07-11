import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "./images/logo.png"
import LoginIcon from '@mui/icons-material/Login';
import { updateLogin } from './Features/resumeSlice';
import { useSelector, useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() {



    const [loginUser, setLoginUser] = useState("")
   
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("name")){
            setLoginUser(localStorage.getItem("name"))
        }
    }, [])

    function handlelogout(){
        localStorage.clear()
        window.onload()
        navigate("/")
    }

    return (
        <header>
            <div className='left' >
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='right' >
                {
                    loginUser ? (
                        <div className='log-out' >
                             <h1> <AccountCircleIcon/> {loginUser}</h1>
                            <button onClick={handlelogout} >Logout <LogoutIcon/></button>
                        </div>
                    ) : (
                        <div className='log-in'>
                            <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link>Detail</Link></li>
                            </ul>
                            <button><Link to='/login'>Login <LoginIcon />  </Link></button>
                        </div>
                    )
                }



            </div>

        </header>
    )
}

export default Header