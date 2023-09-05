import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const product_api = "https://dummyjson.com/products"
const single_product_api = (id) => `${product_api}/${id}`
export const fetchProducts = createAsyncThunk("products/fetchProducts",

    async () => {
        const res = await axios.get(product_api)
        return res?.data;
    }
);

export const fetchProductById = createAsyncThunk("products/fetchProductById",
    async (id) => {
        const res = await axios.get(single_product_api(id));
        return res?.data;
    }
)

const initial_value = {
    isLoading: false, products: [], error: null, selectedProduct: null
}

export const productSlice = createSlice({
    name: "product",
    initialState: initial_value,

    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log("action", action);
            state.isLoading = false;
            state.products = action.payload.products;
            state.error = null
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("action".action);
            state.isLoading = false;
            state.products = []
            state.error = action.error.message
        })

        builder.addCase(fetchProductById.pending, (state,action) => {
            console.log("action".action);
            state.isLoading = true;

        })

        builder.addCase(fetchProductById.fulfilled, (state,action) => {
            console.log("action".action);
            state.isLoading = false;
            state.selectedProduct = action.payload;
            state.error = null;
        })
        builder.addCase(fetchProductById.rejected, (state,action) => {
            console.log("action".action);
            state.isLoading = false;
            state.selectedProduct = null;
            state.error = null;

        })
    }

})



export default productSlice.reducer;
export const { selectProduct } = productSlice.actions




