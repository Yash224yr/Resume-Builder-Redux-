import React, { useState } from 'react'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function Customize() {

  const [show, setShow] = useState("");


  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }



  return (
    <div className='customize'>
      <div className='info' >
        <h1 onClick={() => handlerShow("resume")} > Resume {show === "resume" ? <AutoFixHighIcon /> : <AutoFixNormalIcon />}</h1>
        <div className={`form ${show === "resume" ? 'show' : ''}`}>
          <div className='align' >
            <h3>Margin : </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customize