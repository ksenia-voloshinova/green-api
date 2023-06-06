import { createSlice } from "@reduxjs/toolkit";
import {  fetchAuthorization } from "../../utils/api";

const initialState = {
    isLogout: false,
    idInstance: "",
    tokenInstance: "",
    status: "loading",
};

export const isAuthorizationSlice = createSlice({
    name: "isAuthorization",
    initialState,
    reducers:{
        setIdInstance(state, action){
            state.idInstance = action.payload;
        },
        setApiTokenInstance(state, action){
            state.tokenInstance = action.payload;
        },
    },
    extraReducers:{
        [fetchAuthorization.pending]: (state) => {
            state.isLogout = false;
            state.status = "loading";
        },
        [fetchAuthorization.fulfilled]: (state, action) => {
            state.isLogout = action.payload.isLogout;
            state.status = "success";
        },
        [fetchAuthorization.rejected]: (state) => {
            state.isLogout = false;
            state.status = "error";
        },
    }
});

export const { setIdInstance, setApiTokenInstance} = isAuthorizationSlice.actions;
export default isAuthorizationSlice.reducer;