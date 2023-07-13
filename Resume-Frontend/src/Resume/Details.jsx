import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {updateUserInfo} from '../Features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';



function Details() {
  const [show, setShow] = useState("");

  const dispatch = useDispatch()
  const { Name,
    Title,
   Email,
    Number,
    Location } = useSelector(state => state.resume.UserInfo)

    console.log(Name)

  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }

  return (
    <div className="details">
      <div className="info">
        <h1 onClick={() => handlerShow("info")} className={show === "info" ? "active" : ""}  >Info {show === "info" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "info" ? 'show' : ''}`}>
          <form>
            <input type="text" placeholder='Enter Your Name' value={Name}  onChange={(e)=> dispatch(updateUserInfo({ property: 'Name', value: (e.target.value)}))} />
            <input type="text" placeholder="Enter Your Title"  value={Title}  />
            <input type="email" placeholder="Enter Your Email"  value={Email} />
            <input type="number" placeholder="Enter Your Number"  value={Number} />
            <input type="text" placeholder="Enter Your Location" value={Location}  />
          </form>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("about")} >About {show === "about" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "about" ? 'show' : ''}`}>
          <form>
            <textarea placeholder='Enter About Yourself' ></textarea>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Details;
