import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { updateUserInfo, updateInfoCustom, updateSKills } from '../Features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function Details() {
  const [show, setShow] = useState("");
  const [accountlist, setAccountList] = useState("")
  const [accounturl, setAccountUrl] = useState("")
  const [accountCheck, setAccountCheck] = useState(false)
  const [accountIndex, setAccountIndex] = useState("")
  const [skill, setSkill] = useState("")
  const [skillCheck, setSkillCheck] = useState(false)
  const [skillIndex , setSkillIndex] = useState("")

  const dispatch = useDispatch()
  const { Name,
    Title,
    Email,
    Number,
    Location, abouttext } = useSelector(state => state.resume.UserInfo)

  const { accounts } = useSelector(state => state.resume.infoCustomize)
  const { skillslist } = useSelector(state => state.resume.resumeSkills)

  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }

  function Accountsubmit(e, list) {
    e.preventDefault();
    if (list === "accounts") {
      if (accountCheck === false && accountlist.length > 0 && accounturl.length > 0) {
        dispatch(updateInfoCustom({ property: 'accounts', value: [...accounts, `${accountlist}:- ${accounturl}`] }));
        setAccountList("");
        setAccountUrl("")
      }
      else if (accountCheck === true) {
        const updatedAccounts = [...accounts];
        updatedAccounts[accountIndex] = `${accountlist} :- ${accounturl}`;
        dispatch(updateInfoCustom({ property: 'accounts', value: updatedAccounts }));
        setAccountList("");
        setAccountUrl("")
        setAccountCheck(!accountCheck)
      }
    }

    if (list === "skills") {
      if (skillCheck === false && skill.length > 0) {
        dispatch(updateSKills({ property: "skillslist", value: [...skillslist, skill] }))
        setSkill("")
      }
      else{
        
          dispatch(updateSKills)
      }

    }

  }

  console.log(skillslist)

  function handleredit(list, index) {
    setAccountCheck(!accountCheck)
    setAccountIndex(index)
    const [name, url] = list.split(":-")
    setAccountList(name)
    setAccountUrl(url)
  }

  function handlerdelete(index) {
    const updatedAccounts = [...accounts].filter((list, ind) => {
      return ind !== index;
    });
    dispatch(updateInfoCustom({ property: 'accounts', value: updatedAccounts }));
  }



  console.log(skill)
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
          <form onSubmit={(e) => { Accountsubmit(e, "accounts") }} >
            <input type="text" placeholder='Enter Acount Name' value={accountlist} onChange={(e) => { setAccountList(e.target.value) }} />
            <input type="text" placeholder='Enter URL ' value={accounturl} onChange={(e) => { setAccountUrl(e.target.value) }} />
            <button type='submit' className='detail-save' >Save</button>
            <ul className='details-list' >
              {
                accounts.map((list, index) => {
                  return (
                    <li key={index}>{list} <span><EditIcon onClick={() => { handleredit(list, index) }} ></EditIcon> <DeleteIcon onClick={() => { handlerdelete(index) }} ></DeleteIcon>  </span>  </li>
                  )
                })
              }
            </ul>
          </form>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("about")} className={show === "about" ? "active" : ""} >About {show === "about" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show === "about" ? 'show' : ''}`}>
          <form>
            <textarea type="text" placeholder='Enter About Yourself' value={abouttext} onChange={(e) => dispatch(updateUserInfo({ property: 'abouttext', value: (e.target.value) }))}></textarea>
          </form>
        </div>

      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("skills")} className={show === "skills" ? "active" : ""} >Skills {show === "skills" ? (<KeyboardArrowUpIcon />) : (<KeyboardArrowDownIcon />)}</h1>
        <div className={`form ${show == "skills" ? "show" : ""}`} >
          <form onSubmit={(e) => { Accountsubmit(e, "skills") }} >
            <input type="text" placeholder='Enter Your Skills' value={skill} onChange={(e) => { setSkill(e.target.value) }} />
            <button type='submit' className='detail-save' >Save</button>
          </form>
        </div>

      </div>


    </div>
  );
}

export default Details;
