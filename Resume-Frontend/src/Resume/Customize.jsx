import React, { useState } from 'react'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { resumecustom } from '../Features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

function Customize() {

  const [show, setShow] = useState("");
  const {pad} = useSelector(state => state.resume.resumecustom)

  const dispatch = useDispatch()

  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }

  


  return (
    <div className='customize'>
      <div className='info' >
        <h1 onClick={() => handlerShow("resume")} > Resume {show === "resume" ? <AutoFixHighIcon /> : <AutoFixNormalIcon />}</h1>
        <div className={`form ${show === "resume" ? 'show' : ''}`}>
          <div className='align' >
            <h4> top : <input type='range' min="10" max="45" value={pad} onChange={(e)=> dispatch(resumecustom({ property: 'pad', value: (e.target.value)}))}></input> </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customize