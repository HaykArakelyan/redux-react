import { configureStore } from "@reduxjs/toolkit";
import textValueReducer from "./reducers/textValueReducer";

export const store = configureStore({
    reducer: {
        textValue: textValueReducer
    }
})