import { createSlice } from "@reduxjs/toolkit";
import {  fetchListContacts } from "../../utils/api";



const initialState = {
    contacts: [],
    status: "loading",
};

export const ListContactsSlice = createSlice({
    name: "ListContacts",
    initialState,
    extraReducers:{
        [fetchListContacts.pending]: (state) => {
            state.contacts = [];
            state.status = "loading";
        },
        [fetchListContacts.fulfilled]: (state, action) => {
            state.contacts = action.payload;
            state.status = "success";
        },
        [fetchListContacts.rejected]: (state) => {
            state.contacts = false;
            state.status = "error";
        },
    }
});

// export const { setIdInstance, setApiTokenInstance} = ListContactsSlice.actions;
export default ListContactsSlice.reducer;