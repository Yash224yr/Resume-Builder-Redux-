import React, { useEffect, useState } from 'react'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { resumecustom, updateInfoCustom } from '../Features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';

function Customize() {

  const [show, setShow] = useState("");
  const [swtich, setSwitch] = useState("")
  const { pad, back } = useSelector(state => state.resume.resumecustom)
  const { textsize, titlesize, contactsize  } = useSelector(state => state.resume.infoCustomize)

  const dispatch = useDispatch()

  const colors = [
    {
      id: "red",
      name: "Red",
      code: "#FF0000"
    },
    {
      id: "white",
      name: "White",
      code: "#FFFFFF"
    },
    {
      id: "lightGray",
      name: "Light Gray",
      code: "#CCCCCC"
    },
    {
      id: "darkGray",
      name: "Dark Gray",
      code: "#555555"
    },
    {
      id: "paleBlue",
      name: "Pale Blue",
      code: "#E0E8F0"
    },
    {
      id: "navyBlue",
      name: "Navy Blue",
      code: "#000080"
    },
    {
      id: "beige",
      name: "Beige",
      code: "#F5F5DC"
    },
    {
      id: "darkBeige",
      name: "Dark Beige",
      code: "#D2B48C"
    },
    {
      id: "lightGreen",
      name: "Light Green",
      code: "#90EE90"
    },
    {
      id: "oliveGreen",
      name: "Olive Green",
      code: "#808000"
    }
  ];

  const text = [
    {
      id: "start"
    },
    {
      id: "center"
    },
    {
      id: "end"
    }
  ]

  const textcolor = [
    {
      id: "red",
    },
    {
      id: "blue",
    },
    {
      id: "green",
    },
    {
      id: "yellow",
    },
    {
      id: "purple",
    },
    {
      id: "orange",
    },
    {
      id: "black"
    },
  ]

  const textfont = [
    {
      id: 'Open Sans',
    },
    {
      id: 'Playball',
    },
    {
      id: 'Lovers Quarrel'
    },
    {
      id: 'Roboto Mono'
    }
  ]

  const style = [
    {
      id: "style1"
    },
    {
      id: "style2"
    },
    {
      id: "style3"
    },
    {
      id: "style4"
    },
    {
      id : "style5"
    }
  ]



  function handlerShow(section) {
    setShow(show => (show === section ? "" : section))
  }


  function handlerback(backcolor) {
    dispatch(resumecustom({ property: "back", value: (backcolor) }))
  }

  function handlertext(text) {
    dispatch(updateInfoCustom({ property: "textalign", value: (text) }))
  }

  function handlerTextcolor(color) {
    dispatch(updateInfoCustom({ property: "textcolor", value: (color) }))
  }
  function handlerfontChange(font) {
    dispatch(updateInfoCustom({ property: "textfont", value: (font) }))

  }
  function handlertitlealign(align) {
    dispatch(updateInfoCustom({ property: "titlealign", value: (align) }))

  }
  function handlerTitlecolor(color) {
    dispatch(updateInfoCustom({ property: "titlecolor", value: (color) }))
  }

  function handlerSwitch(show) {
    console.log(show)
    setSwitch(show)
  }

  useEffect(() => {
    setSwitch("name")
  }, [])

  function handlerTagStyle(style){
    dispatch(updateInfoCustom({ property: "tagstyle", value: (style) }))
  }

  console.log(swtich)


  return (
    <div className='customize'>
      <div className='info' >
        <h1 onClick={() => handlerShow("resume")} className={show === "resume" ? "active" : ""} > Resume {show === "resume" ? <AutoFixHighIcon /> : <AutoFixNormalIcon />}</h1>
        <div className={`form ${show === "resume" ? 'show' : ''}`}>
          <div className='align' >
            <h4> top : <input type='range' min="10" max="45" value={pad} onChange={(e) => dispatch(resumecustom({ property: 'pad', value: (e.target.value) }))}></input> </h4>
            <h4 className='title' >BackGround Color :</h4>
            <ul>
              {
                colors.map((list, index) => {
                  return (
                    <li key={index} style={{ backgroundColor: list.code }} onClick={() => { handlerback(list.code) }} ></li>
                  )
                })
              }
              <input type='color' value={back}
                onChange={(e) =>
                  dispatch(resumecustom({ property: "back", value: (e.target.value) }))
                }
              ></input>
            </ul>
          </div>
          <div className='tag-style' >
            <h4 className='title' > Title Style :</h4>
            <ul >
              {
                style.map((list, index) => {
                  return (
                    <li key={index} onClick={()=>{handlerTagStyle(list.id)}} > {list.id} </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='info' >
        <h1 onClick={() => handlerShow("info")} className={show === "info" ? "active" : ""}  > Info  {show === "info" ? <AutoFixHighIcon /> : <AutoFixNormalIcon />}</h1>
        <div className={`form ${show === "info" ? 'show' : ''}`}>
          <div className='switch-info'  >
            <button onClick={() => { handlerSwitch("name") }} className={swtich === "name" ? "button-select" : ""} >Name</button>
            <button onClick={() => { handlerSwitch("title") }} className={swtich === "title" ? "button-select" : ""} >Title</button>
            <button onClick={() => { handlerSwitch("contact") }} className={swtich === "contact" ? "button-select" : ""} >Contact</button>
          </div>
          <div className='header' >
            <div className='header-name' style={{ display: swtich === "name" ? "block" : "none" }} >

              <h4>
                <ul className='text-align' >
                  {
                    text.map((list, index) => {
                      return (
                        <li key={index} onClick={() => { handlertext(list.id) }}>{list.id}</li>
                      )
                    })
                  }
                </ul>
                <ul>
                  {
                    textcolor.map((list, index) => {
                      return (
                        <li key={index} style={{ backgroundColor: list.id }} onClick={() => { handlerTextcolor(list.id) }} ></li>
                      )
                    })
                  }
                </ul>
                <h5>Size : <input type='range' min="20" max="50" value={textsize} onChange={(e) => {
                  dispatch(updateInfoCustom({ property: "textsize", value: (e.target.value) }))
                }} ></input></h5>

                <ul>
                  <h3>Font :
                    <ul>
                      {
                        textfont.map((list, index) => {
                          return (
                            <li key={index} onClick={() => handlerfontChange(list.id)} style={{ fontFamily: list.id }}>{list.id}</li>
                          )
                        })
                      }
                    </ul>
                  </h3>
                </ul>

              </h4>
            </div>
            <div className='header-title' style={{ display: swtich === "title" ? "block" : "none" }} >
              <h4>
                <ul className='text-align' >
                  {
                    text.map((list, index) => {
                      return (
                        <li key={index} onClick={() => { handlertitlealign(list.id) }}>{list.id}</li>
                      )
                    })
                  }
                </ul>
                <h5>Size : <input type='range' min="10" max="30" value={titlesize} onChange={(e) => {
                  dispatch(updateInfoCustom({ property: "titlesize", value: (e.target.value) }))
                }} ></input></h5>
                <ul>
                  {
                    textcolor.map((list, index) => {
                      return (
                        <li key={index} style={{ backgroundColor: list.id }} onClick={() => { handlerTitlecolor(list.id) }} ></li>
                      )
                    })
                  }
                </ul>
              </h4>
            </div>
            <div className='header-contact' style={{ display: swtich === "contact" ? "block" : "none" }} >
              <h5>Size : <input type='range' min="10" max="30" value={contactsize} onChange={(e) => {
                dispatch(updateInfoCustom({ property: "contactsize", value: (e.target.value) }))
              }} ></input></h5>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Customize