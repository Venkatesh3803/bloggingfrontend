import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
    error: false,
    message: "",
    token: ""
}

export const registerUser = createAsyncThunk("registerUser", async (body) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res.json()
})
export const loginUser = createAsyncThunk("loginuser", async (body) => {

    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res.json()

})

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        logOut: (state, action) => {
            localStorage.clear()
            state.user = null
            state.token = ""
        },
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
                state.loading = false
                state.message = action.payload.message
                state.user = action.payload
        },
        [registerUser.rejected]: (state, action) => {
            state.error = true
        },


        // login user
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, action) => {

            state.loading = false
            state.message = action.payload.message
            state.user = action.payload.others
            state.token = action.payload.token

            localStorage.setItem("user", JSON.stringify(action.payload.others))
            localStorage.setItem("token", action.payload.token)

        },

        [loginUser.rejected]: (state, action) => {
            state.error = true;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addUser, addToken, logOut } = authSlice.actions

export default authSlice.reducer