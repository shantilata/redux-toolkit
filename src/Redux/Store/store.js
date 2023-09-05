import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../AllSlice/CounterSlice/ConterSlice";
import postReducer from "../AllSlice/Post/PostSlice";
import productReducer from "../AllSlice/ProductSlice/ProductSlice";
import userReducer from "../AllSlice/UserSlice/userSlice";





const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: userReducer,
        products: productReducer,

    }

})

export default store;