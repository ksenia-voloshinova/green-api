import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    activeChatNumber: '',
    status: "loading",
};

export const ActiveChatSlice = createSlice({
    name: "ActiveChat",
    initialState,
    reducers:{
        setActiveChat(state, action){
            state.activeChatNumber = action.payload;
        },
    }
});

export const { setActiveChat} = ActiveChatSlice.actions;
export default ActiveChatSlice.reducer;