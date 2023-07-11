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
            email : "",
            password : "",
        },

        user : {
            username : "",
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
            state.login.email = action.payload
        },

        updateloginPassword : (state , action) =>{
            state.login.password = action.payload
        },

        updateuser : (state, action) =>{
            state.user.username = action.payload
        }
    }
})

export const {updateEmail , updatePassword , updateName , updateloginEmail , updateloginPassword , updateuser} = resumeSlice.actions

export default resumeSlice.reducer
