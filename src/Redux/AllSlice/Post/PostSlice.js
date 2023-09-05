import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api_url = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts",
    async () => {
        const res = await axios.get(api_url)
        return res?.data;
    }

)

const initial_value = {
    isLoading: false, posts: [], error: null
}

export const postSlice = createSlice({
    name: "posts",
    initialState: initial_value,

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log("action", action);
            state.isLoading = false
            state.posts = action.payload
            state.error = null
        })


        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log("action", action);
            state.isLoading = false
            state.posts = []
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer