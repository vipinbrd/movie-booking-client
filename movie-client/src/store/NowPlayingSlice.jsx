import { createSlice } from "@reduxjs/toolkit";
import { replace } from "react-router-dom";

export const NowPlayingSlice=createSlice({
    name:"playing",
    initialState:[],
    reducers:{
        replaceNowPlaying(state,payload){
            return payload.payload;
        }
    }
})
export const{replaceNowPlaying}=NowPlayingSlice.actions;