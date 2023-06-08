import { createSlice } from "@reduxjs/toolkit";
import { fetchListMessages } from "../../utils/api";



const initialState = {
    messages: [],
    status: "loading",
};

export const MessagesChatActiveSlice = createSlice({
    name: "MessagesChatActive",
    initialState,
    reducers:{
        // setMessageChatActive(state, action){
        //     state.messages = action.payload;
        // },
    },
    extraReducers:{
        [fetchListMessages.pending]: (state) => {
            state.messages = [];
            state.status = "loading";
        },
        [fetchListMessages.fulfilled]: (state, action) => {
            state.messages = action.payload;
            state.status = "success";
        },
        [fetchListMessages.rejected]: (state) => {
            state.messages = [];
            state.status = "error";
        },
    }
});

export const { setMessageChatActive} = MessagesChatActiveSlice.actions;
export default MessagesChatActiveSlice.reducer;