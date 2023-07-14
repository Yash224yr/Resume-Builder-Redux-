import React from 'react'
import { useSelector } from 'react-redux'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Templateone() {

    const { Name, Title, Email, Number, Location } = useSelector(state => state.resume.UserInfo)
    const { pad, back } = useSelector(state => state.resume.resumecustom)
    const { textalign, textcolor, textsize, textfont, titlealign, titlesize, titlecolor, contactsize } = useSelector(state => state.resume.infoCustomize)
    console.log(titlesize)


    return (
        <div className='template-1' style={{ padding: pad ? pad + "px" : "20px", backgroundColor: back ? back : "rgb(255, 255, 255)" }}>
            <div className='template-header' >
                <div className='name' >
                    <h1 style={{
                        textAlign: textalign ? textalign : "center",
                        color: textcolor ? textcolor : "black",
                        fontSize: textsize ? textsize + "px" : "25px",
                        fontFamily: textfont ? textfont : 'Playfair Display',
                    }} >{Name}</h1>
                    <h2 style={{
                        textAlign: titlealign ? titlealign : "center",
                        fontSize: titlesize ? titlesize + "px" : "1rem",
                        color: titlecolor ? titlecolor : "black",
                    }} >{Title}</h2>
                </div>
                <div className='contact' style={{fontSize : contactsize ? contactsize + "px" : "20px" }} >
                    <p>{Email && <><EmailIcon /> {Email}</>}</p>
                    <p>{Number && <><PhoneIcon></PhoneIcon> {Number}</>}</p>
                    <p>{Location && <><LocationOnIcon></LocationOnIcon> {Location}</>}</p>
                </div>
            </div>
        </div>
    )
}

export default Templateone