import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increase } from './Features/resumeSlice'

function Home() {

    const dispatch = useDispatch()
    const selector = useSelector((state)=>{
        return state.resume
    })

  return (
    <div className='home' >
        <div className='content' >

        </div>
        <div className='image' >
            
        </div>
    </div>
  )
}

export default Home