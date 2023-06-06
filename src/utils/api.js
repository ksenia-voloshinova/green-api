import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuthorization = createAsyncThunk (
    "isAuthorizationSlice/authorization",
    async({idInstance, tokenInstance}) => {
        const {data} = await axios.get(`https://api.green-api.com/waInstance${idInstance}/logout/${tokenInstance}`);
        return data;
    }
);
