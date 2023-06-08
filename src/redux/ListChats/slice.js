import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    chats: [],
    status: "loading",
};

export const ListChatsSlice = createSlice({
    name: "ListChats",
    initialState,
    reducers:{
        setChatsList(state, action){
            state.chats.push(action.payload);
        },
    }
});

export const { setChatsList } = ListChatsSlice.actions;
export default ListChatsSlice.reducer;