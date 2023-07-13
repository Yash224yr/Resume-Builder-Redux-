import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Details() {
  const [show, setShow] = useState("");

 function handlerShow(section){
    setShow(show => (show === section ? "" : section ))
 }

  return (
    <div className="details">
      <div className="info">
        <h1 onClick={()=>handlerShow("info")} className={show=== "info" ? "active" : ""}  >Info {show=== "info" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "info" ? 'show' : ''}`}>
          <form>
            <input type="text" placeholder='Enter Your Name' />
            <input type="text" placeholder="Enter Your Title" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="number" placeholder="Enter Your Number" />
            <input type="text" placeholder="Enter Your Location" />
          </form>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={()=>handlerShow("about")} >About {show === "about"  ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <form>
            <textarea></textarea>
        </form>
      </div>
    </div>
  );
}

export default Details;
