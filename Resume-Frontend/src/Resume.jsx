import React from 'react'
import Details from './Resume/Details'
import Template from './Resume/Template'
import Customize from './Resume/Customize'

function Resume() {
    return (
        <div className='resume' >
            <div className='section-1' >
                <Details></Details>
            </div>
            <div className='section-2'>
                <Template></Template>
            </div>

            <div  className='section-3'  >

            <Customize></Customize>
            </div>
        </div>
    )
}

export default Resume