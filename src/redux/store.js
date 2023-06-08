import { configureStore } from "@reduxjs/toolkit";
import isAuthorizationSlice from "./Authorization/slice";
import ListContactsSlice from "./ListContacts/slice";
import ListChatsSlice from "./ListChats/slice";
import ActiveChatSlice from "./ActiveChat/slice";
import OutgoingMessageSlice from "./OutgoingMessage/slice";
import MessagesChatActiveSlice from "./MessagesChatActive/slice";


export const store = configureStore({
    reducer: {
        isAuthorizationSlice,
        ListContactsSlice,
        ListChatsSlice,
        ActiveChatSlice,
        OutgoingMessageSlice,
        MessagesChatActiveSlice,
    }
});