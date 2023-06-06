import { configureStore } from "@reduxjs/toolkit";
import isAuthorizationSlice from "./Authorization/slice";


export const store = configureStore({
    reducer: {
        isAuthorizationSlice,
    }
});