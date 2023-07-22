import React, { useEffect, useState } from 'react'
import Details from './Resume/Details'
import Template from './Resume/Template'
import { useSelector } from 'react-redux'
import Customize from './Resume/Customize'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedIcon from '@mui/icons-material/Feed';




function Resume() {

    const [change, Switch] = useState("")

    function handleswitch(update) {
        Switch(update)
    }

    useEffect(() => {
        Switch("content")
    }, [])


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
                    <button>Save</button>
                </div>
            </div>
            <div className='section-2' >
                <Template></Template>
            </div>

        </div>
    )
}

export default Resume