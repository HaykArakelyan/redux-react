import { createSlice } from "@reduxjs/toolkit";

export const textValueSlice = createSlice({
    name: "textValue",
    initialState: {
        textValue: ""
    },
    reducers: {
        clear: store => {
            store.textValue = ""
        },
        update: (store, action) => {
            store.textValue = action.payload
        },
        toUpperCase: (store) => {
            store.textValue = store.textValue.toUpperCase()
        }
    }
})

export const { clear, update, toUpperCase } = textValueSlice.actions

export default textValueSlice.reducer