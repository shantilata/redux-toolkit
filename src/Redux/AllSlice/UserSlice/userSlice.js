import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// let user_api = "https://jsonplaceholder.typicode.com/users"

// export const fetchUsers = createAsyncThunk("users/fetchUsers",
//     async () => {
//         const res = await axios.get(user_api)
//         return res?.data
//     }
// )

// const initial_value = {
//     isLoading: false, users: [], error: null
// }

// export const userSlice = createSlice({
//     name: "users",
//     initialState: initial_value,

//     extraReducers: (builder) => {
//         builder.addCase(fetchUsers.pending, (state, action) => {
//             console.log("action", action);
//             state.isLoading = true
//         }
//         )

//         builder.addCase(fetchUsers.fulfilled, (state, action) => {
//             console.log("action", action);
//             state.isLoading = false
//             state.users = action.payload
//             state.error = null
//         })

//         builder.addCase(fetchUsers.rejected, (state, action) => {
//             console.log("action", action);
//             state.isLoading = false
//             state.users = []
//             state.error = action.error.message
//         })
//     }
// })

// export default userSlice.reducer

const user_api = "https://jsonplaceholder.typicode.com/users"
export const fetchUsers = createAsyncThunk("users/fetchUsers",
    async () => {
        const res = await axios.get(user_api)
        return res?.data;
    }
)

const initial_value = {
    isLoading: false,
    error: null,
    users: []
}

export const userSlice = createSlice({
    name: "users",
    initialState: initial_value,

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            console.log("action", action);
            state.isLoading = true;
        })

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.users = action.payload
            state.error = null
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;