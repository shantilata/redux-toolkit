import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
const log_in_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin"
const initialState = {
    isLoading: false, error: null, data: null
}

export const regUser = createAsyncThunk("data/fetchData",
    async (formData) => {
        const res = await axios.post(reg_api, formData, {

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                alert("Data submitted");
                console.log("add res", res)
                if (res.data.status === 200) {
                    console.log("Registration successful");
                    window.sessionStorage.setItem("token", res.data.token)
                }
                else {
                    alert("Registration unsuccessful")
                }
            })
            .catch((err) => {
                alert("Error in add data")
                console.log("add err", err);
            })



        return res?.data;
    }
)

export const logInUser = createAsyncThunk("logInData/fetchLogInData",
    async (data) => {
        const res = axios.post(log_in_api, data, {

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                alert("Data submitted");
                console.log("add res", res)
                if (res.data.status === 200) {
                    console.log("Login successful");
                    window.sessionStorage.setItem("token", res.data.token)
                }
                else {
                    alert("Login unsuccessful")
                }
            })
            .catch((err) => {
                alert("Error in add data")
                console.log("add err", err);
            })
        return res?.data;

    })





const AuthSlice = createSlice({
    name: 'UserForm',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(regUser.pending, (state, action) => {
            console.log("action", action);
            state.isLoading = true;
        })
        builder.addCase(regUser.fulfilled, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.data = action.payload
            state.error = null;
        })
        builder.addCase(regUser.rejected, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.data = null;
            state.error = action.error.message;
        })
        builder.addCase(logInUser.pending, (state, action) => {
            console.log("action", action);
            state.isLoading = true;
        })
        builder.addCase(logInUser.fulfilled, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        })
        builder.addCase(logInUser.rejected, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.data = null;
            state.error = action.error.message;
        })
    }
})

export default AuthSlice.reducer;