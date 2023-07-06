import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name : "resume" ,

    initialState : {
        register : {
            name : "",
            email: "",
            password : "",
        }
    } ,

    reducers : {
        
        updateName : (state , action) => {
            state.register.name = action.payload
        },

        updateEmail : (state, action) => {
            state.register.email = action.payload   
        },

        updatePassword : (state, action) => {
            state.register.password = action.payload
        },

    }
})

export const {updateEmail , updatePassword , updateName} = resumeSlice.actions

export default resumeSlice.reducer
