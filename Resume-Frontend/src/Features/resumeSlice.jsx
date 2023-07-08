import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name : "resume" ,

    initialState : {
        register : {
            name : "",
            email: "",
            password : "",
        },

        login : {
            loginEmail : "",
            loginPassword : "",
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

        updateloginEmail : (state , action) => {
            state.login.loginEmail = action.payload
        },

        updateloginPassword : (state , action) =>{
            state.login.loginPassword = action.payload
        },




    }
})

export const {updateEmail , updatePassword , updateName , updateloginEmail , updateloginPassword} = resumeSlice.actions

export default resumeSlice.reducer
