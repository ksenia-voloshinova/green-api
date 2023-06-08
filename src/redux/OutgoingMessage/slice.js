import { createSlice } from "@reduxjs/toolkit";
import {  fetchSendMessage } from "../../utils/api";



const initialState = {
    status: "loading",
};

export const OutgoingMessageSlice = createSlice({
    name: "OutgoingMessage",
    initialState,
    extraReducers:{
        [fetchSendMessage.pending]: (state) => {
            state.status = "loading";
        },
        [fetchSendMessage.fulfilled]: (state) => {
            state.status = "success";
        },
        [fetchSendMessage.rejected]: (state) => {
            state.status = "error";
        },
    }
});

export default OutgoingMessageSlice.reducer;