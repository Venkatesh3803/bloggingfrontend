import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    post: null,
    loading: false,
    error: false,
    message: "",
    token: ""
}

export const uploadPost = createAsyncThunk("uploadpost", async (body) => {
    const res = await fetch("http://localhost:5000/api/post/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return res.json()
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addpost: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(uploadPost.fulfilled, (state, action) => {
                state.post = action.payload
                state.loading = false
                state.error = false
            })
            .addCase(uploadPost.rejected, (state, action) => {
                state.error = true
            })

    }
})

// Action creators are generated for each case reducer function
export const { addpost } = postSlice.actions

export default postSlice.reducer