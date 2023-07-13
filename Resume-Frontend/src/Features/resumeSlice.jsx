import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name: "resume",

    initialState: {
        register: {
            name: "",
            email: "",
            password: "",
        },

        login: {
            email: "",
            password: "",
        },

        user: {
            username: "",
        },


        UserInfo: {
            Name: "",
            Title: "",
            Email: "",
            Number: "",
            Location: "",
        },

        customisation  : {
            InfoNamefont : ""
        },

      

    },


    reducers: {
        updateName: (state, action) => {
            state.register.name = action.payload
        },

        updateEmail: (state, action) => {
            state.register.email = action.payload
        },

        updatePassword: (state, action) => {
            state.register.password = action.payload
        },

        updateloginEmail: (state, action) => {
            state.login.email = action.payload
        },

        updateloginPassword: (state, action) => {
            state.login.password = action.payload
        },

        updateuser: (state, action) => {
            state.user.username = action.payload
        },

        updateUserInfo: (state, action) => {
            const { property, value } = action.payload;
            state.UserInfo[property] = value;
        },

       
       
    }
})

export const {
    updateEmail, updatePassword, updateName, updateloginEmail, updateloginPassword, updateuser, updateUserInfo  
} = resumeSlice.actions

export default resumeSlice.reducer
