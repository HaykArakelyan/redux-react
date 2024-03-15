import { createSlice } from "@reduxjs/toolkit";

export const textValueSlice = createSlice({
    name: "textValue",
    initialState: {
        textValue: "dump text"
    },
    reducers: {
        clear: state => {
            state.textValue = ""
        },
        update: (state, action) => {
            state.textValue = action.payload
        }
    }
})

export const { clear, update } = textValueSlice.actions

export default textValueSlice.reducer