import { configureStore } from "@reduxjs/toolkit";
import textValueReducer from "./reducers";

export const store = configureStore({
    reducer: {
        textValue: textValueReducer
    }
})