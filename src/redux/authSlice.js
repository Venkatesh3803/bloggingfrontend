import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
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
            state.user = ""
            state.token = ""
        },
    },
    extraReducers: {
        [registerUser.pending]: (state, action) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state, { payload: { error, message, user } }) => {
            if (state.error) {
                state.error = error
            } else {
                state.loading = false
                state.message = message
                state.user = user
            }
        },
        [registerUser.rejected]: (state, action) => {
            state.error = true
        },


        // login user
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },

        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload
            
        },

        [loginUser.rejected]: (state, action) => {
            state.error = true;
        },
    }
})

// Action creators are generated for each case reducer function
export const { addUser, addToken, logOut } = authSlice.actions

export default authSlice.reducer