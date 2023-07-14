import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { updateUserInfo, updateInfoCustom } from '../Features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';



function Details() {
  const [show, setShow] = useState("");
  const [accountlist, setAccountList] = useState("")

  const dispatch = useDispatch()
  const { Name,
    Title,
    Email,
    Number,
    Location } = useSelector(state => state.resume.UserInfo)

  const { accounts } = useSelector(state => state.resume.infoCustomize)


  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }

  function Accountsubmit(e) {
    e.preventDefault();
    dispatch(updateInfoCustom({ property: 'accounts', value: [...accounts, accountlist] }));
    setAccountList("");
  }
  console.log(accounts)

  return (
    <div className="details">
      <div className="info">
        <h1 onClick={() => handlerShow("info")} className={show === "info" ? "active" : ""}  >Info {show === "info" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "info" ? 'show' : ''}`}>
          <form>
            <input type="text" placeholder='Enter Your Name' value={Name} onChange={(e) => dispatch(updateUserInfo({ property: 'Name', value: (e.target.value) }))} />
            <input type="text" placeholder="Enter Your Title" value={Title} onChange={(e) => dispatch(updateUserInfo({ property: 'Title', value: (e.target.value) }))} />
            <input type="email" placeholder="Enter Your Email" value={Email} onChange={(e) => dispatch(updateUserInfo({ property: 'Email', value: (e.target.value) }))} />
            <input type="number" placeholder="Enter Your Number" value={Number} onChange={(e) => dispatch(updateUserInfo({ property: 'Number', value: (e.target.value) }))} />
            <input type="text" placeholder="Enter Your Location" value={Location} onChange={(e) => dispatch(updateUserInfo({ property: 'Location', value: (e.target.value) }))} />
          </form>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("account")} className={show === "account" ? "active" : ""}  > Accounts {show === "account" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "account" ? 'show' : ''}`}>
          <form onSubmit={Accountsubmit} >
            <input type="text" placeholder='Enter Acount Name' value={accountlist} onChange={(e) => { setAccountList(e.target.value) }} />
              <ul>

              </ul>
            
            <button type='submit' className='detail-save' >Save</button>
          </form>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("about")} className={show === "about" ? "active" : ""} >About {show === "about" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
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
