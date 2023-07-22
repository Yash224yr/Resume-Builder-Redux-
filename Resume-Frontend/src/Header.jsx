import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "./images/logo.png"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { updateuser } from './Features/resumeSlice';




function Header() {




    const { username } = useSelector(state => state.resume.user)




    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem("name")) {
            const name = localStorage.getItem("name")
            dispatch(updateuser(name))
        }
    }, [])

    function handlelogout() {
        localStorage.clear()
        dispatch(updateuser(""))
        navigate("/")
        window.location.reload()
    }

    return (
        <header>
            <div className='left' >
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/resume" >Resume</Link></li>
            </ul>
            <div className='right' >

                {
                    username ? (
                        <div className='log-out' >
                            <h1> <AccountCircleIcon /> {username}</h1>
                            <button onClick={handlelogout} >Logout <LogoutIcon /></button>
                        </div>
                    ) : (
                        <div className='log-in'>

                            <button><Link to='/login'>Login <LoginIcon />  </Link></button>
                        </div>
                    )
                }



            </div>

        </header>
    )
}

export default Header