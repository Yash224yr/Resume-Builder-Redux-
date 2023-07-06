import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "../Features/resumeSlice"

export default configureStore ({
    reducer :{
        resume : resumeReducer
    }
})