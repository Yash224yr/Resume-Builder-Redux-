import React from 'react'
import Details from './Resume/Details'
import Template from './Resume/Template'
import Customize from './Resume/Customize'
import content from "./images/content.png"
import customisation from "./images/customisation.png"
import customisation2 from "./images/customisation-2.png"

function Resume() {


 

    return (
        <div className='resume' >
            <div className='section-1'>
                <Details></Details>
                {/* <Customize></Customize> */}
            </div>
            <div className='section-2' >
                <Template></Template>
            </div>

        </div>
    )
}

export default Resume