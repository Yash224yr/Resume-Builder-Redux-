import React from 'react'
import { useSelector } from 'react-redux'


function Templateone() {

    const { Name, Title, Email, Number, Location } = useSelector(state => state.resume.UserInfo)
    const { pad, back } = useSelector(state => state.resume.resumecustom)
    const { textalign, textcolor, textsize , textfont } = useSelector(state => state.resume.infoCustomize)


    console.log(pad + "px")
    console.log(back)
    console.log(textalign)
    console.log(textcolor)
    console.log(textsize)
    return (
        <div className='template-1' style={{ padding: pad ? pad + "px" : "20px", backgroundColor: back ? back : "rgb(255, 255, 255)" }}>
            <div className='template-header' >
                <div className='name' >
                    <h1 style={{
                        textAlign: textalign ? textalign : "center",
                        color: textcolor ? textcolor : "black",
                        fontSize: textsize ? textsize + "px" : "25px",
                        fontFamily : textfont ? textfont  : 'Playfair Display',
                    }} >{Name}</h1>
                    <h2>{Title}</h2>
                </div>
                <div className='contact' >
                    <p>{Email}</p>
                    <p>{Number}</p>
                    <p>{Location}</p>
                </div>
            </div>
        </div>
    )
}

export default Templateone