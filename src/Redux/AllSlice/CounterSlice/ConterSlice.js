// slice means collection of logic

import { createSlice } from '@reduxjs/toolkit'

// createSlice helps to collect all logic

export const counterSlice = createSlice({
    name: "counter",
    msg: "",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
            state.msg = "Incremet Done"
        },
        decrement: (state) => {
            state.count = state.count - 1
            state.msg = "Decremet Done"
        },

        reset: (state) => {
            state.count = 0
            state.msg = "Reset Done"
        },

    }
})

export default counterSlice.reducer

export const { increment, decrement, reset } = counterSlice.actions