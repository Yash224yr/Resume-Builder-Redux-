import React, { useEffect, useState } from 'react'
import axios from "axios"
import Details from './Resume/Details'
import Template from './Resume/Template'
import { useSelector } from 'react-redux'
import Customize from './Resume/Customize'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedIcon from '@mui/icons-material/Feed';




function Resume() {

    const [change, Switch] = useState("")

    const {  Name , Title , Email , Number , Location , abouttext  } = useSelector(state => state.resume.UserInfo)
    const {pad , back} = useSelector(state => state.resume.resumecustom)
    const { textalign, textcolor, textsize, textfont, titlealign, titlesize, titlecolor, contactsize, accounts , tagstyle } = useSelector(state => state.resume.infoCustomize)

  

        
   

    function handleswitch(update) {
        Switch(update)
    }

    useEffect(() => {
        Switch("content")
    }, [])

    function handlerSave(){
        axios
        .post(
          "http://localhost:3000/update",
          {
            Name : Name,
            Title : Title,
            Email : Email,
            Number : Number ,
            Location : Location ,
            abouttext : abouttext,
            padding : pad,
            background : back,
            TextAlign : textalign,
            TextColor : textcolor,
            TextSize : textsize,
            TextFont : textfont,
            Titlealign : titlealign,
            TitleSize : titlesize,
            TitleColor : titlecolor ,
            ContactSize : contactsize,
            Accounts :  accounts,
            Tagstyle : tagstyle,
          },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`, // Include the token in the request headers
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }


    return (
        <div className='resume' >
            <div className='section-1'>
                <div className='switch' >
                    <button onClick={() => { handleswitch("content") }} >Content <FeedIcon></FeedIcon> </button>
                    <button onClick={() => { handleswitch("custom") }} >Customisation <AutoAwesomeIcon/> </button>
                </div>
                {
                    change === "content" ? (
                        <Details></Details>
                    ) : (
                        <Customize></Customize>
                    )
                }
                <div className='save-button' >
                    <button onClick={handlerSave} >Save</button>
                </div>
            </div>
            <div className='section-2' >
                <Template></Template>
            </div>

        </div>
    )
}

export default Resume