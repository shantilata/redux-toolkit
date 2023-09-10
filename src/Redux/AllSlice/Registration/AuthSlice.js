import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const reg_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signup"
const login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin"
const profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"


const initial_value = {
    isLoading: false,
    error: null,

    // api parameters
    status: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: "",
    // user define variables
    message: "",
    errMsg: "",
    authenticated: false,
    authToken: "",
};


export const Sign_Up = createAsyncThunk("auth/Sign_Up",
    async (userdata) => {
        const res = await axios.post(reg_api, userdata, {
            headers: {

                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*",
            }
        })
        window.sessionStorage.setItem("token", res.data.token);
        return res?.data;
    })

export const Log_In = createAsyncThunk("auth/Sign_In",
    async (userdata) => {

        const res = await axios.post(login_api, userdata, {
            headers: {
                "Content-Type": "application/form-data",
                "Access-Control-Allow-Origin": "*",
            }
        })
        window.sessionStorage.setItem("token", res.data.token);
        return res?.data;
    })

export const Profile1 = createAsyncThunk("auth/Profile1",
    async () => {
        const valid_token = window.sessionStorage.getItem("token");
        const res = await axios.get(profile_api,
            {
                headers: {
                    "x-access-token": valid_token,
                    "Content-Type": "application/form-data",
                    "Access-Control-Allow-Origin": "*",
                }
            }
        )
        return res?.data;
    })





export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initial_value,

    reducers: {
        Sign_Out: (state) => {
            state.authenticated = false;
            state.authToken = "";
            window.sessionStorage.removeItem("token");
        },
    },

    extraReducers: (builder) => {
        builder.addCase(Sign_Up.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(Sign_Up.fulfilled, (state, action) => {
            console.log("action", action);
            if (action.payload.status === 200) {
                state.isLoading = false;
                state.status = action.payload.status;
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
                state.email = action.payload.email;
                state.message = action.payload.message;
                console.log("action", action);
                // alert("Hello " + state.first_name + " " + state.last_name + "\n" + state.message + ", for email address: ", state.email)
            }
            else {
                alert("NOt done");
            }

        })

        builder.addCase(Sign_Up.rejected, (state, action) => {
            // console.log("Action: ", action);
            state.isLoading = false;
            state.error = action.error.message;
            console.log("Action: ", action);
        })
        builder.addCase(Log_In.pending, (state, action) => {

        })


        builder.addCase(Log_In.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.status === 200) {
                state.isLoading = false;
                state.status = action.payload.status;
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
                state.email = action.payload.email;
                state.message = action.payload.message;
                console.log("action", action);
                // alert("Hello " + state.first_name + " " + state.last_name + "\n" + state.message + ", for email address: ", state.email)
            }

            else {
                alert("Login not done")
            }

        })
        builder.addCase(Log_In.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            console.log("Action: ", action);
        })

        builder.addCase(Profile1.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(Profile1.fulfilled, (state, action) => {
            let base_url = "https://wtsacademy.dedicateddevelopers.us/";
            let folder_path = "uploads/user/profile_pic/";
            let img_url = base_url + folder_path + action.payload.data.profile_pic;
            console.log("Image_url: ", img_url);

            if (action.payload.status === 200) {
                state.isLoading = false;
                state.status = action.payload.status;
                state.first_name = action.payload.data.first_name;
                state.last_name = action.payload.data.last_name;
                state.email = action.payload.data.email;
                state.profile_pic = img_url;
                state.message = action.payload.message;
                console.log("action", action);
                // alert("Hello " + state.first_name + " " + state.last_name + "\n" + state.message + ", for email address: ", state.email)
            }

            else {
                alert("Failed to fetch profile")
            }
        })
        builder.addCase(Profile1.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            console.log("Action: ", action);
        })



    }
})

export default AuthSlice.reducer;