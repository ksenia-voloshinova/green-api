import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchAuthorization = createAsyncThunk (
    "isAuthorizationSlice/authorization",
    async({idInstance, tokenInstance}) => {
        const {data} = await axios.get(`https://api.green-api.com/waInstance${idInstance}/logout/${tokenInstance}`);
        return data;
    }
);

export const fetchListContacts = createAsyncThunk (
    "ListContactsSlice/ListContacts",
    async({idInstance, tokenInstance}) => {
        const {data} = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getContacts/${tokenInstance}`);
        return data;
    }
);
export const fetchSendMessage = createAsyncThunk (
    "OutgoingMessageSlice/OutgoingMessage",
    async({idInstance, tokenInstance ,messageText ,activeChatNumber}) => {
        const {data} = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${tokenInstance}`, {
            "chatId": `${activeChatNumber}@c.us`,
            "message": messageText
        }).then(() => {
            axios.post(`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${tokenInstance}`, {
            "chatId": `${activeChatNumber}@c.us`,
            "count": 100
            })
        });;
        return data;
    }   
);
export const fetchListMessages = createAsyncThunk (
    "MessagesChatActiveSlice/MessagesChatActive",
    async({idInstance, tokenInstance, activeChatNumber }) => {
        const {data} = await axios.post(`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${tokenInstance}`, {
            "chatId": `${activeChatNumber}@c.us`,
            "count": 100000
        })
        return data;
    }
);

