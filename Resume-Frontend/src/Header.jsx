import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./images/logo.png"
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';


function Header() {
    return (
        <header>
            <div className='left' >
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className='right' >
                <div className='log-out' >
                    {/* <h1>{userinfo}</h1> */}
                    {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
                <div className='log-in'>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link>Detail</Link></li>
                    </ul>
                    <button><Link to='/login'>Login <LoginIcon/>  </Link></button>
                </div>

            </div>

        </header>
    )
}

export default Header