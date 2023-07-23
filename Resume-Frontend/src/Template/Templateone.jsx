import React from 'react'
import { useSelector } from 'react-redux'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Templateone() {

    const { Name, Title, Email, Number, Location, abouttext } = useSelector(state => state.resume.UserInfo)
    const { pad, back } = useSelector(state => state.resume.resumecustom)
    const { textalign, textcolor, textsize, textfont, titlealign, titlesize, titlecolor, contactsize, accounts, tagstyle } = useSelector(state => state.resume.infoCustomize)
    const { skillslist } = useSelector(state => state.resume.resumeSkills)


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
                <div className='contact' style={{ fontSize: contactsize ? contactsize + "px" : "20px" }} >
                    <p>{Email && <><EmailIcon /> {Email}</>}</p>
                    <p>{Number && <><PhoneIcon></PhoneIcon> {Number}</>}</p>
                    <p>{Location && <><LocationOnIcon></LocationOnIcon> {Location}</>}</p>
                </div>
                <div className='accounts' >
                    <ul>
                        {
                            accounts.map((list, index) => {
                                const [name, url] = list.split(":-")
                                return (
                                    <li key={index}><span>{name + " " + ":"}</span> {url} </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {
                abouttext &&
                <div className='template-about' >
                    <div className={tagstyle ? tagstyle : "style1"} >
                        <h1>About</h1>
                    </div>
                    <div className='about ' >
                        <p>{abouttext}</p>
                    </div>
                </div>
            }
            {
                skillslist.length > 0 &&
                <div className='template-skills' >
                    <div className={tagstyle ? tagstyle : "style1"} >
                        <h1>Skills</h1>
                    </div>
                    <div className='skill-list' >
                        <ul>
                            {
                                skillslist.map((list , index)=>{
                                    return (
                                        <li key={index} >{list}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            }

        </div>
    )
}

export default Templateone